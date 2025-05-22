import axios from 'axios';

// Get all tasks
export const getAllTasks = async (filters) => {
  const params = new URLSearchParams();

  // Add filters to params
  if (filters.status && filters.status !== 'all') {
    params.append('status', filters.status);
  }

  if (filters.priority && filters.priority !== 'all') {
    params.append('priority', filters.priority);
  }

  if (filters.sort) {
    params.append('sort', filters.sort);
  }

  if (filters.search) {
    params.append('search', filters.search);
  }

  if (filters.page) {
    params.append('page', filters.page.toString());
  }

  const response = await axios.get(`/tasks?${params.toString()}`);
  return response.data;
};

// Get task stats
export const getTaskStats = async () => {
  const response = await axios.get('/tasks/stats');
  return response.data;
};

// Create a new task
export const createTask = async (task) => {
  const response = await axios.post('/tasks', task);
  return response.data;
};

// Get a single task
export const getTask = async (id) => {
  const response = await axios.get(`/tasks/${id}`);
  return response.data;
};

// Update a task
export const updateTask = async (id, task) => {
  const response = await axios.patch(`/tasks/${id}`, task);
  return response.data;
};

// Delete a task
export const deleteTask = async (id) => {
  const response = await axios.delete(`/tasks/${id}`);
  return response.data;
};
