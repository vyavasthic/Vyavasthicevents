import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#895E3D] text-white"> {/* Deep brown background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* First Column - Vyavasthic Events */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-4">
              <img
                src="/images/vavastic.png"
                alt=""
                className="h-8 w-8 object-contain rounded-full"
              />
              <span className="ml-2 text-xl font-bold">Vyavasthic Events</span>
            </div>
            <p className="text-[#EBDAC6] mb-4 text-center sm:text-left"> {/* Light beige text */}
              Designing your Dreams, Staging your Stories
            </p>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a
                href="https://www.instagram.com/vyavasthic?igsh=MXRreTU4MGxxY3l3"
                className="text-[#EBDAC6] hover:text-[#D9AF70]" 
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/vyavasthic-events/"
                className="text-[#EBDAC6] hover:text-[#D9AF70]" 
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/153wJqR3f4/?mibextid=kFxxJD"
                className="text-[#EBDAC6] hover:text-[#D9AF70]" 
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Second Column - Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-[#D9AF70]"> {/* Gold text */}
              Quick Links
            </h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]"> {/* Light beige hover to gold */}
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Previous Events
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Services */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-[#D9AF70]">
              Services
            </h3>
            <ul className="space-y-2 text-center sm:text-left">
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Wedding Planning
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Decor and Styling
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Guest Management
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Catering and menu
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" className="text-[#EBDAC6] hover:text-[#D9AF70]">
                  Venue selection
                </a>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Contact Info */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-4 text-center sm:text-left text-[#D9AF70]">
              Contact Info
            </h3>
            <div className="space-y-4 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start">
                <MapPin className="h-5 w-5 text-[#D9AF70] mr-2" /> {/* Gold icon */}
                <span className="text-[#EBDAC6]">Mumbai, India</span> {/* Light beige text */}
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="h-5 w-5 text-[#D9AF70] mr-2" /> {/* Gold icon */}
                <span className="text-[#EBDAC6]">
                  +91 9819358421 <br /> +919664330078{" "}
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start">
                <Mail className="h-5 w-5 text-[#D9AF70] mr-2" /> {/* Gold icon */}
                <span className="text-[#EBDAC6]">events@vyavasthic.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9AF70] mt-12 pt-8 text-center"> {/* Gold border */}
          <p className="text-[#EBDAC6]">
            © {new Date().getFullYear()} Vyavasthic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
