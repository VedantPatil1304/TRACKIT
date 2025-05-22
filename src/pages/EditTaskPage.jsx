import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import TaskForm from '../components/task/TaskForm';
import { getTask, updateTask } from '../services/taskService';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchTask = async () => {
      try {
        setIsLoading(true);
        const response = await getTask(id);
        setTask(response.task);
      } catch (error) {
        console.error('Error fetching task:', error);
        toast.error('Failed to load task. Please try again.');
        navigate('/tasks');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTask();
  }, [id, navigate]);

  const handleSubmit = async (formData) => {
    if (!id) return;

    try {
      setIsSaving(true);
      await updateTask(id, formData);
      toast.success('Task updated successfully');
      navigate('/tasks');
    } catch (error) {
      console.error('Error updating task:', error);
      toast.error('Failed to update task. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!task) {
    return (
      <Layout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-lg font-medium text-gray-900">Task not found</h2>
            <p className="mt-2 text-sm text-gray-500">The task you're looking for doesn't exist.</p>
            <div className="mt-6">
              <button
                onClick={() => navigate('/tasks')}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Back to Tasks
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

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
          <h1 className="mt-2 text-2xl font-bold text-gray-900">Edit Task</h1>
        </div>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-medium text-gray-900">Task Details</h2>
          </CardHeader>
          <CardContent>
            <TaskForm initialData={task} onSubmit={handleSubmit} isLoading={isSaving} />
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default EditTaskPage;
