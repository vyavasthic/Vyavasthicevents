import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    url: "images/Previous/Event_1.1.jpg",
    // caption: "Beautiful Wedding Ceremony",
  },
  {
    url: "images/Previous/Event_1.2.jpg",
    // caption: "Elegant Reception",
  },
  {
    url: "images/Previous/Event_1.3.jpg",
    // caption: "Garden Wedding",
  },
  {
    url: "images/Previous/Event_2.1.jpg",
    // caption: "Wedding Details",
  },
  {
    url: "images/Previous/Event_2.2.jpg",
    // caption: "Romantic Moments",
  },
  {
    url: "images/Previous/Event_2.3.jpg",
    // caption: "Romantic Moments",
  },
  // {
  //   url: "images/Previous/Event_1.1.jpg",
  //   caption: "Romantic Moments",
  // },
  // {
  //   url: "images/Previous/Event_1.1.jpg",
  //   caption: "Romantic Moments",
  // },
];

const Prevgallary: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, []);

  // Auto-slide logic
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Auto-slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [autoSlide, nextSlide]);

  // Pause auto-slide on interaction
  const handleManualNavigation = (callback: () => void) => {
    setAutoSlide(false);
    callback();
    setTimeout(() => setAutoSlide(true), 3000); // Resume auto-slide after 3 seconds
  };

  return (
    <div className="relative h-[600px] bg-[#F6EFE9]"> {/* Light beige background */}
      {/* Main Image */}
      <div className="w-full h-full relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image.url}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#823D14]/70 to-transparent p-6">
              <p className="text-white text-xl font-light">{image.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={() => handleManualNavigation(prevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={() => handleManualNavigation(nextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNavigation(() => setCurrentIndex(index))}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-[#823D14] scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Prevgallary;
