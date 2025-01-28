import React from 'react';

const Map = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-semibold mb-6 " style={{ color: '#D9AF70' }}>Visit Our Office</h2> {/* Gold color for the title */}
      <div className="bg-[#F6EFE9] p-6 rounded-lg shadow-md"> {/* Soft beige background */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.971775620726!2d72.8258333149011!3d19.0760906870891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce5d0a6b0b1f%3A0x2b2b2b2b2b2b2b2b!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1647043435129!5m2!1sen!2sin"
            className="w-full h-[400px] rounded-lg "
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
        <div className="mt-4">
          <h3 className="font-medium text-lg mb-2" style={{ color: '#823D14' }}>Parking Information</h3> {/* Deep brown color for the subtitle */}
          <p className="text-gray-600">
            Complimentary parking is available for clients in our private lot. Street parking is also available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map;
