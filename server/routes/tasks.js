import express from 'express';
import {
  getAllTasks,
  getTaskStats,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(auth);

router.route('/').get(getAllTasks).post(createTask);
router.route('/stats').get(getTaskStats);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

export default router;