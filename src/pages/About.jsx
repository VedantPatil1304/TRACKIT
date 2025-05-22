import React from "react";
import { Link } from "react-router-dom";
import Button from '../components/ui/Button'; // make sure this path is correct

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-indigo-700 mb-6 text-center">About TrackIt</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          TrackIt is a productivity tool designed to help you manage tasks, track progress, and stay focused on what matters.
          Built for simplicity and power, TrackIt adapts to your workflow to keep you in control of your goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🚀 Productivity First</h2>
            <p className="text-gray-600">TrackIt removes distractions and helps you focus on your top priorities through clean interfaces and smart task sorting.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">📈 Visual Progress</h2>
            <p className="text-gray-600">Real-time charts and analytics keep you motivated as you watch your productivity grow over time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">🔔 Smart Reminders</h2>
            <p className="text-gray-600">Never miss a deadline again with customizable reminders and due date alerts built right into your dashboard.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">📱 Responsive Design</h2>
            <p className="text-gray-600">Whether you're on desktop or mobile, TrackIt works flawlessly everywhere — no app download required.</p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/">
            <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-white">
                Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
