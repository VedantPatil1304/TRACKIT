// import React, { useEffect, useState } from "react";
// import { getCurrentUser, updateProfile } from "../services/userService";
// import { FaUserCircle, FaEnvelope, FaSave, FaEdit } from "react-icons/fa";
// import toast from "react-hot-toast";

// const Profile = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//   });

//   const [isEditing, setIsEditing] = useState(false);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await getCurrentUser();
//         setFormData({
//           name: res.data.name,
//           email: res.data.email,
//         });
//       } catch (error) {
//         toast.error("Failed to fetch user info");
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateProfile(formData);
//       toast.success("Profile updated successfully");
//       setIsEditing(false);
//     } catch (error) {
//       toast.error("Update failed");
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
//       <div className="flex items-center justify-center mb-6">
//         <FaUserCircle className="text-6xl text-gray-500 dark:text-gray-300" />
//       </div>
//       <h2 className="text-2xl font-bold text-center mb-4 text-gray-800 dark:text-gray-100">
//         My Profile
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 text-gray-600 dark:text-gray-300 flex items-center gap-2">
//             <FaUserCircle /> Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             disabled={!isEditing}
//             value={formData.name}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
//               isEditing ? "cursor-text" : "cursor-not-allowed"
//             }`}
//           />
//         </div>

//         <div>
//           <label className="block mb-1 text-gray-600 dark:text-gray-300 flex items-center gap-2">
//             <FaEnvelope /> Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             disabled={!isEditing}
//             value={formData.email}
//             onChange={handleChange}
//             className={`w-full px-4 py-2 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
//               isEditing ? "cursor-text" : "cursor-not-allowed"
//             }`}
//           />
//         </div>

//         {isEditing ? (
//           <button
//             type="submit"
//             className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center justify-center gap-2"
//           >
//             <FaSave /> Save Changes
//           </button>
//         ) : (
//           <button
//             type="button"
//             onClick={() => setIsEditing(true)}
//             className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 flex items-center justify-center gap-2"
//           >
//             <FaEdit /> Edit Profile
//           </button>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Profile;
