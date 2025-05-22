import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Your privacy is important to us. TrackIt does not sell or share your data. Any personal information is used solely to provide and improve the service.</p>
      <p className="mb-4">We store only essential information for your productivity experience. All data is encrypted and securely stored.</p>
      <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default PrivacyPolicy;