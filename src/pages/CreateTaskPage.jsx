import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import TaskForm from '../components/task/TaskForm';
import { createTask } from '../services/taskService';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const CreateTaskPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (formData) => {
    try {
      setIsLoading(true);
      await createTask(formData);
      toast.success('Task created successfully');
      navigate('/tasks');
    } catch (error) {
      console.error('Error creating task:', error);
      toast.error('Failed to create task. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back
          </button>
          <h1 className="mt-2 text-2xl font-bold text-gray-900">Create New Task</h1>
        </div>
        
        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900">
              Task Details
            </h2>
          </CardHeader>
          <CardContent>
            <TaskForm onSubmit={handleSubmit} isLoading={isLoading} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default CreateTaskPage;
