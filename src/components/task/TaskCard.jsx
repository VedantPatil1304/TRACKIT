import React from 'react';
import { format } from 'date-fns';
import Card, { CardContent } from '../ui/Card';
import { Edit, Trash2, CalendarClock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TaskCard = ({ task, onDelete, onStatusChange }) => {
  const navigate = useNavigate();

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-amber-100 text-amber-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'todo':
        return 'bg-gray-100 text-gray-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatText = (text) =>
    text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

  const handleStatusChange = () => {
    let newStatus;

    switch (task.status) {
      case 'todo':
        newStatus = 'in-progress';
        break;
      case 'in-progress':
        newStatus = 'completed';
        break;
      default:
        newStatus = 'todo';
    }

    onStatusChange(task._id, newStatus);
  };

  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 truncate">{task.title}</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => navigate(`/tasks/edit/${task._id}`)}
                className="text-gray-400 hover:text-gray-500"
                aria-label="Edit task"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => onDelete(task._id)}
                className="text-gray-400 hover:text-red-500"
                aria-label="Delete task"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(
                task.priority
              )}`}
            >
              {formatText(task.priority)}
            </span>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                task.status
              )}`}
            >
              {formatText(task.status)}
            </span>
            {task.dueDate && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                <CalendarClock size={12} className="mr-1" />
                {format(new Date(task.dueDate), 'MMM d')}
              </span>
            )}
          </div>

          {task.description && (
            <p className="mt-3 text-sm text-gray-500 line-clamp-2">{task.description}</p>
          )}

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500">{format(new Date(task.createdAt), 'MMM d, yyyy')}</span>

            <button
              onClick={handleStatusChange}
              className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {task.status === 'completed' ? 'Restart' : 'Move Forward'}
              <ArrowRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
