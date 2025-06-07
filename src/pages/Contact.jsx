import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import vedantdp from '../vedantdp.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    toast.dismiss();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 shadow-lg rounded-xl overflow-hidden bg-white">
        {/* Left Panel */}
        <div className="bg-indigo-50 p-10 flex flex-col items-center justify-center space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Get in Touch</h1>
            <p className="text-lg text-indigo-900 max-w-md mx-auto">
              We'd love to hear from you. Whether you have a question, feedback, or a partnership opportunity—drop us a message!
            </p>
          </div>

          <div className="space-y-6 text-indigo-900">
            <div className="flex items-center space-x-4 text-lg">
              <Mail className="text-indigo-600" />
              <span>vedpvt1304@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <Phone className="text-indigo-600" />
              <span>+91 9766210221</span>
            </div>
            <div className="flex items-center space-x-4 text-lg">
              <MapPin className="text-indigo-600" />
              <span>Pune, India</span>
            </div>
          </div>

          <div className="mt-4">
            <img
              src={vedantdp}
              alt="Your Name"
              className="w-60 h-72 object-cover rounded-lg border-4 border-black shadow-xl transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <Link
            to="/"
            className="mt-6 inline-block bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition"
          >
            Back to Home
          </Link>
        </div>

        {/* Right Panel */}
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg space-y-6">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows={5}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center space-x-2 bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition disabled:opacity-60"
          >
            <Send size={18} />
            <span>{loading ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
