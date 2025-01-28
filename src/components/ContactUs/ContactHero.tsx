import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-[40vh] bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("images/conta.jpeg")',
        backgroundColor: '#F6EFE9', // Adding a soft beige background color
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#D9AF70' }}>Contact Us</h1> {/* Gold color for the title */}
          <p className="text-xl md:text-2xl" style={{ color: '#EBDAC6' }}>Let's Make Your Dream Wedding a Reality</p> {/* Light beige color for subtitle */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
