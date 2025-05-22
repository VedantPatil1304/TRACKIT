import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import { CalendarClock, AlignLeft, CheckCircle } from 'lucide-react';

const TaskForm = ({ initialData, onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    description: initialData?.description || '',
    status: initialData?.status || 'todo',
    priority: initialData?.priority || 'medium',
    dueDate: initialData?.dueDate ? new Date(initialData.dueDate).toISOString().split('T')[0] : '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    } else if (formData.title.length > 100) {
      newErrors.title = 'Title must be less than 100 characters';
    }

    if (formData.description && formData.description.length > 1000) {
      newErrors.description = 'Description must be less than 1000 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          id="title"
          name="title"
          type="text"
          label="Task Title"
          placeholder="Enter task title"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
          required
          leftIcon={<CheckCircle size={18} />}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <div className="relative">
          <div className="absolute top-3 left-3 text-gray-400">
            <AlignLeft size={18} />
          </div>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Enter task description (optional)"
            value={formData.description}
            onChange={handleChange}
            className={`block w-full rounded-md shadow-sm pl-10 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 ${
              errors.description ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
            }`}
          />
        </div>
        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Select
            id="status"
            name="status"
            label="Status"
            value={formData.status}
            onChange={handleChange}
            options={[
              { value: 'todo', label: 'To Do' },
              { value: 'in-progress', label: 'In Progress' },
              { value: 'completed', label: 'Completed' },
            ]}
          />
        </div>

        <div>
          <Select
            id="priority"
            name="priority"
            label="Priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: 'low', label: 'Low' },
              { value: 'medium', label: 'Medium' },
              { value: 'high', label: 'High' },
            ]}
          />
        </div>

        <div>
          <Input
            id="dueDate"
            name="dueDate"
            type="date"
            label="Due Date"
            value={formData.dueDate}
            onChange={handleChange}
            leftIcon={<CalendarClock size={18} />}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" isLoading={isLoading}>
          {initialData ? 'Update Task' : 'Create Task'}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
