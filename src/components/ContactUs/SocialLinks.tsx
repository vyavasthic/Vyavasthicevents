import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="pt-6 border-t border-gray-200">
      <h3 className="font-medium text-lg mb-4" style={{ color: '#D9AF70' }}>Follow Us</h3> {/* Gold color for the heading */}
      <div className="flex gap-4">
        <a
          href="https://www.instagram.com/vyavasthic?igsh=MXRreTU4MGxxY3l3"
          className="p-3 bg-[#F6EFE9] rounded-lg hover:bg-[#EBDAC6] transition-colors"
        >
          <Instagram className="w-6 h-6" style={{ color: '#823D14' }} />
        </a>
        <a
          href="https://www.facebook.com/share/153wJqR3f4/?mibextid=kFxxJD"
          className="p-3 bg-[#F6EFE9] rounded-lg hover:bg-[#EBDAC6] transition-colors"
        >
          <Facebook className="w-6 h-6" style={{ color: '#823D14' }} />
        </a>
        <a
          href="https://www.linkedin.com/company/vyavasthic-events/"
          className="p-3 bg-[#F6EFE9] rounded-lg hover:bg-[#EBDAC6] transition-colors"
        >
          <Linkedin className="w-6 h-6" style={{ color: '#823D14' }} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
