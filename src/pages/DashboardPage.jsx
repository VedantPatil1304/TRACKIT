import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import StatsCard from '../components/dashboard/StatsCard';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import TaskCard from '../components/task/TaskCard';
import { getTaskStats, getAllTasks, updateTask } from '../services/taskService';
import { 
  CheckSquare, 
  Clock, 
  ListTodo, 
  Layers, 
  Plus, 
  ArrowRight 
} from 'lucide-react';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    todo: 0,
    'in-progress': 0,
    completed: 0,
    total: 0,
  });
  
  const [recentTasks, setRecentTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        
        // Fetch stats
        const statsResponse = await getTaskStats();
        setStats(statsResponse.stats);
        
        // Fetch recent tasks
        const tasksResponse = await getAllTasks({ sort: 'newest', limit: 3 });
        setRecentTasks(tasksResponse.tasks);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchDashboardData();
  }, []);
  
  const handleStatusChange = async (id, status) => {
    try {
      await updateTask(id, { status });
      
      // Update task in recent tasks list
      setRecentTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === id ? { ...task, status } : task
        )
      );
      
      // Update stats
      const updatedStats = { ...stats };
      
      // Find the task to get its current status
      const task = recentTasks.find((t) => t._id === id);
      if (task) {
        // Decrease count for old status
        if (updatedStats[task.status] !== undefined) {
          updatedStats[task.status] = Math.max(0, updatedStats[task.status] - 1);
        }
        // Increase count for new status
        if (updatedStats[status] !== undefined) {
          updatedStats[status] += 1;
        }
      }
      
      setStats(updatedStats);
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Track your productivity and manage your tasks
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link to="/tasks/create">
              <Button leftIcon={<Plus size={16} />}>New Task</Button>
            </Link>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatsCard
                title="Total Tasks"
                value={stats.total}
                icon={<Layers size={24} />}
                color="indigo"
              />
              <StatsCard
                title="To Do"
                value={stats.todo}
                icon={<ListTodo size={24} />}
                color="blue"
              />
              <StatsCard
                title="In Progress"
                value={stats['in-progress']}
                icon={<Clock size={24} />}
                color="yellow"
              />
              <StatsCard
                title="Completed"
                value={stats.completed}
                icon={<CheckSquare size={24} />}
                color="green"
              />
            </div> */}
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader className="flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Recent Tasks</h2>
                    <Link to="/tasks" className="text-sm text-indigo-600 hover:text-indigo-500 flex items-center">
                      View all <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </CardHeader>
                  <CardContent>
                    {recentTasks.length > 0 ? (
                      <div className="space-y-4">
                        {recentTasks.map((task) => (
                          <TaskCard
                            key={task._id}
                            task={task}
                            onDelete={() => {}} // Not showing delete on dashboard
                            onStatusChange={handleStatusChange}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">No tasks yet. Create your first task!</p>
                        <div className="mt-4">
                          <Link to="/tasks/create">
                            <Button>Create Task</Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="h-full">
                  <CardHeader>
                    <h2 className="text-lg font-medium text-gray-900">Productivity Tips</h2>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-indigo-500">
                          <CheckSquare size={20} />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Break large tasks into smaller, manageable subtasks.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-indigo-500">
                          <CheckSquare size={20} />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Set deadlines for all tasks to stay focused and accountable.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-indigo-500">
                          <CheckSquare size={20} />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Use priority labels to focus on what matters most.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-indigo-500">
                          <CheckSquare size={20} />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">
                          Review completed tasks to celebrate progress and learn.
                        </p>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default DashboardPage;
