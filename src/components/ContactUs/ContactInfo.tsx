import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SocialLinks from "./SocialLinks";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#F6EFE9] rounded-lg">
          <Phone className="w-6 h-6 text-[#D9AF70]" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-[#823D14]">Phone</h3>
          <p className="text-[#823D14]">Main Office: +91 9819358421</p>
          <p className="text-[#823D14]">Wedding Hotline: +91 9664330078</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#F6EFE9] rounded-lg">
          <Mail className="w-6 h-6 text-[#D9AF70]" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-[#823D14]">Email</h3>
          <p className="text-[#823D14]">events@vyavasthic.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#F6EFE9] rounded-lg">
          <MapPin className="w-6 h-6 text-[#D9AF70]" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-[#823D14]">Location</h3>
          <p className="text-[#823D14]">Main Office:</p>
          <p className="text-[#823D14]">Mumbai, Maharashtra</p>
          <p className="text-[#823D14]">India</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#F6EFE9] rounded-lg">
          <Clock className="w-6 h-6 text-[#D9AF70]" />
        </div>
        <div>
          <h3 className="font-medium text-lg text-[#823D14]">Business Hours</h3>
          <p className="text-[#823D14]">Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p className="text-[#823D14]">Saturday - Sunday: 10:00 AM - 4:00 PM</p>
          <p className="text-[#823D14] mt-2 italic">
            Available 24/7 for emergency support
          </p>
        </div>
      </div>

      <SocialLinks />
    </div>
  );
};

export default ContactInfo;
