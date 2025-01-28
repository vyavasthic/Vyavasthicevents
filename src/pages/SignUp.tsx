// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Import the background image from your assets folder
// import backgroundImage from '/images/bg.png';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   // Handle form submission
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     fetch('http://localhost:3000/app/user/signup', {
//       method: 'POST',
//       mode: 'cors',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         navigate('/signin');
//       })
//       .catch((error) => console.error('Error:', error));
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-black">
//       {/* Background image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//         }}
//       ></div>

//       {/* Blurred Card */}
//       <div className="relative z-10 w-full max-w-md p-8 rounded-lg shadow-lg bg-white bg-opacity-40 backdrop-blur-lg">
//         <h1 className="text-2xl font-semibold mb-6 text-center text-[#321414] font-bold">User Sign Up</h1>
//         <form className="space-y-6" onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-medium text-[#321414] font-bold mb-2">First Name</label>
//             <input
//               id="firstName"
//               type="text"
//               placeholder="Enter your first name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//               minLength="3"
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#321414]"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-medium text-[#321414] font-bold mb-2">Last Name</label>
//             <input
//               id="lastName"
//               type="text"
//               placeholder="Enter your last name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//               minLength="3"
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#321414]"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-[#321414] font-bold mb-2">Email</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="Enter your email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               title="Please enter a valid email address."
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#321414]"
//             />
//           </div>
//           <div>
//             <label htmlFor="username" className="block text-sm font-medium text-[#321414] font-bold mb-2">Username</label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Enter your username"
//               name="username"
//               value={formData.username}
//               onChange={handleInputChange}
//               required
//               title="Username must be at least 6 characters long and contain only alphanumeric characters."
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#321414]"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-[#321414] font-bold mb-2">Password</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               required
//               title="Password must be at least 6 characters long."
//               minLength="6"
//               className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#321414]"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 bg-[#321414] text-white rounded-lg hover:bg-[#4c2b2b] focus:outline-none focus:ring-2 focus:ring-[#321414]"
//           >
//             Sign Up
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-sm text-gray-600">
//             Already have an account?{' '}
//             <a href="/signin" className="text-[#321414] font-bold hover:underline">Sign In</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
