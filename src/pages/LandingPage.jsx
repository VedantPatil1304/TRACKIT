import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  CheckCircle, 
  Clock, 
  Calendar, 
  TrendingUp, 
  CheckSquare,
  Star,
  ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';

const LandingPage = () => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <header className="bg-gradient-to-r from-indigo-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center">
              <span className="text-white font-bold text-6xl">TrackIt</span>
            </div>
            <div>
              {user ? (
                <Link to="/dashboard">
                  <Button variant="secondary">Go to Dashboard</Button>
                </Link>
              ) : (
                <div className="flex space-x-4">
                  <Link to="/login">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="secondary">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </nav>
          
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                Boost Your Productivity
              </h1>
              <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                TrackIt helps you organize tasks, track progress, and achieve more every day. The simple yet powerful productivity tool you've been waiting for.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
                <Link to="/register">
                  <Button size="lg" variant="secondary">
                    Get Started for Free
                  </Button>
                </Link>
                <Link to="/about">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-indigo-600">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mt-12 md:mt-0">
              <div className="bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/6951881/pexels-photo-6951881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="TrackIt Dashboard Preview" 
                  className="rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Features section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to stay productive
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              TrackIt combines powerful task management with intuitive design to help you accomplish more with less stress.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Task Management</h3>
              <p className="mt-2 text-gray-600">
                Create, organize, and track tasks with ease. Add details, due dates, and priority levels.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center text-teal-600 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Progress Tracking</h3>
              <p className="mt-2 text-gray-600">
                Monitor task progress from todo to completion. Update status with a single click.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center text-amber-600 mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Due Dates & Reminders</h3>
              <p className="mt-2 text-gray-600">
                Set due dates for tasks and never miss a deadline. Stay on schedule with your projects.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Productivity Analytics</h3>
              <p className="mt-2 text-gray-600">
                See your productivity trends and task completion rates at a glance through intuitive dashboards.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <CheckSquare size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Task Prioritization</h3>
              <p className="mt-2 text-gray-600">
                Prioritize tasks with high, medium, and low tags. Focus on what matters most to you.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Simple & Intuitive</h3>
              <p className="mt-2 text-gray-600">
                Clean, user-friendly design requires no learning curve. Get started and be productive immediately.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl text-center">
            Ready to boost your productivity?
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-3xl text-center">
            Join thousands of users who have transformed their productivity with TrackIt. Start organizing your tasks today.
          </p>
          <div className="mt-8">
            <Link to="/register">
              <Button size="lg" variant="secondary" rightIcon={<ArrowRight size={20} />}>
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="md:flex md:items-center md:justify-between">
      <span className="text-indigo-600 font-bold text-2xl">TrackIt</span>
      <div className="mt-6 md:mt-0 flex flex-wrap gap-6 justify-center md:justify-end text-sm text-gray-600">
        <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        <a href="/privacy-policy" className="hover:text-indigo-600">Privacy Policy</a>
        <a href="/terms-of-service" className="hover:text-indigo-600">Terms of Service</a>
      </div>
    </div>
    <p className="mt-8 text-center text-gray-500 text-sm">
      &copy; 2025 TrackIt. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
};

export default LandingPage;
