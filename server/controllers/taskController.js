import Task from '../models/Task.js';

// Get all tasks for current user
export const getAllTasks = async (req, res) => {
  try {
    const { status, priority, sort, search } = req.query;

    // Build query
    const queryObject = { createdBy: req.user.userId };

    // Filter by status
    if (status && status !== 'all') {
      queryObject.status = status;
    }

    // Filter by priority
    if (priority && priority !== 'all') {
      queryObject.priority = priority;
    }

    // Search by title
    if (search) {
      queryObject.title = { $regex: search, $options: 'i' };
    }

    // Create query
    let result = Task.find(queryObject);

    // Sort
    if (sort) {
      const sortOptions = {
        newest: '-createdAt',
        oldest: 'createdAt',
        'a-z': 'title',
        'z-a': '-title',
        'due-date': 'dueDate',
        priority: '-priority',
      };
      const sortOption = sortOptions[sort] || '-createdAt';
      result = result.sort(sortOption);
    } else {
      result = result.sort('-createdAt');
    }

    // Pagination
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    // Execute query
    const tasks = await result;

    // Get total count for pagination
    const totalTasks = await Task.countDocuments(queryObject);
    const numOfPages = Math.ceil(totalTasks / limit);

    res.status(200).json({ tasks, totalTasks, numOfPages });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get all task stats for current user
export const getTaskStats = async (req, res) => {
  try {
    // Aggregate stats for all statuses for the current user
    const stats = await Task.aggregate([
      { $match: { createdBy: req.user.userId } },
      { $group: { _id: '$status', count: { $sum: 1 } } },
    ]);


    // Map stats to an object with all statuses
    const allStatuses = ['todo', 'in-progress', 'completed'];
    const taskStats = { todo: 0, 'in-progress': 0, completed: 0, total: 0 };

    stats.forEach(stat => {
      if (allStatuses.includes(stat._id)) {
        taskStats[stat._id] = stat.count;
      }
    });

    // Calculate total
    taskStats.total = allStatuses.reduce((sum, status) => sum + taskStats[status], 0);

    res.status(200).json({ stats: taskStats });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Create new task
export const createTask = async (req, res) => {
  try {
    req.body.createdBy = req.user.userId;
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Get single task
export const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      createdBy: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({ message: `No task with id ${req.params.id}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Update task
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: `No task with id ${req.params.id}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

// Delete task
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId,
    });

    if (!task) {
      return res.status(404).json({ message: `No task with id ${req.params.id}` });
    }

    res.status(200).json({ message: 'Task removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

