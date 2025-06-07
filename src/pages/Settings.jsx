// // client/src/pages/Settings.jsx
// import React, { useState } from 'react';
// import { FaMoon, FaBell } from 'react-icons/fa';

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifications, setNotifications] = useState(true);

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10">
//       <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
//         Settings
//       </h1>

//       <div className="space-y-6">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <FaMoon className="text-xl text-blue-500" />
//             <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>
//           </div>
//           <button
//             onClick={() => setDarkMode(!darkMode)}
//             className={`w-12 h-6 rounded-full transition-all ${darkMode ? 'bg-blue-600' : 'bg-gray-400'}`}
//           >
//             <div
//               className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
//                 darkMode ? 'translate-x-6' : 'translate-x-0'
//               }`}
//             />
//           </button>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <FaBell className="text-xl text-yellow-500" />
//             <span className="text-gray-700 dark:text-gray-200">Notifications</span>
//           </div>
//           <button
//             onClick={() => setNotifications(!notifications)}
//             className={`w-12 h-6 rounded-full transition-all ${notifications ? 'bg-green-500' : 'bg-gray-400'}`}
//           >
//             <div
//               className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
//                 notifications ? 'translate-x-6' : 'translate-x-0'
//               }`}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Settings;
