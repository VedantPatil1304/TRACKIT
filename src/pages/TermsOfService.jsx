import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen px-6 py-10 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">By using TrackIt, you agree to use it for lawful purposes only. We reserve the right to suspend accounts that violate our policies.</p>
      <p className="mb-4">The service is provided as-is without warranty. Please review regularly for any updates to these terms.</p>
      <Link to="/" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default TermsOfService;