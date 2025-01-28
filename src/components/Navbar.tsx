// // import React, { useState } from "react";

// // export default function Navbar() {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   // Close the mobile menu when a link is clicked
// //   const handleLinkClick = () => {
// //     setIsMobileMenuOpen(false);
// //     setIsDropdownOpen(false);
// //   };

// //   return (
// //     <nav className="bg-[#D9AF70] shadow-lg fixed top-0 left-0 right-0 z-50">
// //       <div className="max-w-7xl mx-auto px-4">
// //         <div className="flex justify-between items-center h-16">
// //           {/* Logo and Branding */}
// //           <div className="flex items-center space-x-2">
// //             <a href="/" className="flex items-center">
// //               <img
// //                 src="images/logo head.PNG"
// //                 alt="Logo"
// //                 className="h-12 w-12 object-contain rounded-full"
// //               />
// //               <img src="images/logoname.PNG" alt="Logo Name" className="h-5" />
// //             </a>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden custom:flex items-center space-x-6">
// //             <a
// //               href="/"
// //               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //             >
// //               Home
// //             </a>

// //             <div className="relative">
// //               <button
// //                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
// //                 className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //               >
// //                 Destinations
// //               </button>
// //               {isDropdownOpen && (
// //                 <div className="absolute bg-[#EBDAC6] shadow-lg mt-2 rounded-md w-48 z-10">
// //                   <a
// //                     href="/venues#local"
// //                     onClick={handleLinkClick}
// //                     className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //                   >
// //                     Destinations in India
// //                   </a>
// //                   <a
// //                     href="/venues#global"
// //                     onClick={handleLinkClick}
// //                     className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //                   >
// //                     Global Destinations
// //                   </a>
// //                 </div>
// //               )}
// //             </div>

// //             <a
// //               href="/services"
// //               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //             >
// //               Services
// //             </a>
// //             <a
// //               href="/events"
// //               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //             >
// //               Previous Events
// //             </a>
// //             <a
// //               href="/contactus"
// //               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //             >
// //               Contact Us
// //             </a>
// //             <a
// //               href="/plan-meeting"
// //               className="bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
// //             >
// //               Plan Meeting
// //             </a>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="custom:hidden flex items-center">
// //             <button
// //               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //               className="text-[#895E3D] focus:outline-none"
// //             >
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //                 stroke="currentColor"
// //                 className="w-6 h-6"
// //               >
// //                 {isMobileMenuOpen ? (
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 ) : (
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M4 6h16M4 12h16M4 18h16"
// //                   />
// //                 )}
// //               </svg>
// //             </button>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         <div
// //           className={`${
// //             isMobileMenuOpen ? "block" : "hidden"
// //           } custom:hidden bg-[#EBDAC6] text-center space-y-4 py-4 transition-all ease-in-out duration-300 transform`}
// //         >
// //           <a
// //             href="/"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Home
// //           </a>
// //           <a
// //             href="#local"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Destinations in India
// //           </a>
// //           <a
// //             href="#global"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Global Destinations
// //           </a>
// //           <a
// //             href="/services"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Services
// //           </a>
// //           <a
// //             href="/events"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Previous Events
// //           </a>
// //           <a
// //             href="/contactus"
// //             onClick={handleLinkClick}
// //             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
// //           >
// //             Contact Us
// //           </a>
// //           <a
// //             href="/plan-meeting"
// //             onClick={handleLinkClick}
// //             className="block bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
// //           >
// //             Plan Meeting
// //           </a>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }
//   import React, { useState } from "react";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Close menus when a link is clicked
//   const handleLinkClick = () => {
//     setIsMobileMenuOpen(false);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <nav className="bg-[#D9AF70] shadow-lg fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 md:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo and Branding */}
//           <div className="flex items-center space-x-2">
//             <a href="/" className="flex items-center">
//               <img
//                 src="images/logo head.PNG"
//                 alt="Logo"
//                 className="h-10 w-10 object-contain rounded-full"
//               />
//               <img
//                 src="images/logoname.PNG"
//                 alt="Logo Name"
//                 className="hidden sm:block h-5"
//               />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-6">
//             <a
//               href="/"
//               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//             >
//               Home
//             </a>

//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//               >
//                 Destinations
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute bg-[#EBDAC6] shadow-lg mt-2 rounded-md w-48 z-10">
//                   <a
//                     href="/venues#local"
//                     onClick={handleLinkClick}
//                     className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//                   >
//                     Destinations in India
//                   </a>
//                   <a
//                     href="/venues#global"
//                     onClick={handleLinkClick}
//                     className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//                   >
//                     Global Destinations
//                   </a>
//                 </div>
//               )}
//             </div>

//             <a
//               href="/services"
//               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//             >
//               Services
//             </a>
//             <a
//               href="/events"
//               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//             >
//               Previous Events
//             </a>
//             <a
//               href="/contactus"
//               className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//             >
//               Contact Us
//             </a>
//             <a
//               href="/plan-meeting"
//               className="bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
//             >
//               Plan Meeting
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-[#895E3D] focus:outline-none"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`${
//             isMobileMenuOpen ? "block" : "hidden"
//           } md:hidden bg-[#EBDAC6] space-y-4 py-4 transition-all ease-in-out duration-300`}
//         >
//           <a
//             href="/"
//             onClick={handleLinkClick}
//             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//           >
//             Home
//           </a>
//           <div className="relative">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="block w-full text-left hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//             >
//               Destinations
//             </button>
//             {isDropdownOpen && (
//               <div className="bg-[#EBDAC6] shadow-lg mt-2 rounded-md">
//                 <a
//                   href="/venues#local"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//                 >
//                   Destinations in India
//                 </a>
//                 <a
//                   href="/venues#global"
//                   onClick={handleLinkClick}
//                   className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//                 >
//                   Global Destinations
//                 </a>
//               </div>
//             )}
//           </div>
//           <a
//             href="/services"
//             onClick={handleLinkClick}
//             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//           >
//             Services
//           </a>
//           <a
//             href="/events"
//             onClick={handleLinkClick}
//             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//           >
//             Previous Events
//           </a>
//           <a
//             href="/contactus"
//             onClick={handleLinkClick}
//             className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
//           >
//             Contact Us
//           </a>
//           <a
//             href="/plan-meeting"
//             onClick={handleLinkClick}
//             className="block bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
//           >
//             Plan Meeting
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }
import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Close menus when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-[#D9AF70] shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center">
              <img
                src="images/logo head.PNG"
                alt="Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              <img
                src="images/logoname.PNG"
                alt="Logo Name"
                className="hidden sm:block h-5"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 text-center">
            <a
              href="/"
              className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
            >
              Home
            </a>

            <div className="relative text-center">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
              >
                Destinations
              </button>
              {isDropdownOpen && (
                <div className="absolute bg-[#EBDAC6] shadow-lg mt-2 rounded-md w-48 z-10">
                  <a
                    href="/venues#local"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D] text-center"
                  >
                    Destinations in India
                  </a>
                  <a
                    href="/venues#global"
                    onClick={handleLinkClick}
                    className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D] text-center"
                  >
                    Global Destinations
                  </a>
                </div>
              )}
            </div>

            <a
              href="/services"
              className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
            >
              Services
            </a>
            <a
              href="/events"
              className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
            >
              Previous Events
            </a>
            <a
              href="/contactus"
              className="hover:text-[#823D14] transition duration-300 text-[#895E3D]"
            >
              Contact Us
            </a>
            <a
              href="/plan-meeting"
              className="bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
            >
              Plan Meeting
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#895E3D] focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-[#EBDAC6] space-y-4 py-4 transition-all ease-in-out duration-300 text-center`}
        >
          <a
            href="/"
            onClick={handleLinkClick}
            className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block w-full text-center hover:text-[#823D14] transition duration-300 text-[#895E3D]"
            >
              Destinations
            </button>
            {isDropdownOpen && (
              <div className="bg-[#EBDAC6] shadow-lg mt-2 rounded-md">
                <a
                  href="/venues#local"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D] text-center"
                >
                  Destinations in India
                </a>
                <a
                  href="/venues#global"
                  onClick={handleLinkClick}
                  className="block px-4 py-2 hover:text-[#823D14] transition duration-300 text-[#895E3D] text-center"
                >
                  Global Destinations
                </a>
              </div>
            )}
          </div>
          <a
            href="/services"
            onClick={handleLinkClick}
            className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
          >
            Services
          </a>
          <a
            href="/events"
            onClick={handleLinkClick}
            className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
          >
            Previous Events
          </a>
          <a
            href="/contactus"
            onClick={handleLinkClick}
            className="block hover:text-[#823D14] transition duration-300 text-[#895E3D]"
          >
            Contact Us
          </a>
          <a
            href="/plan-meeting"
            onClick={handleLinkClick}
            className="block bg-[#895E3D] text-white px-4 py-2 rounded-md hover:bg-[#823D14] transition duration-300"
          >
            Plan Meeting
          </a>
        </div>
      </div>
    </nav>
  );
}
