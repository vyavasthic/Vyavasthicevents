import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Image {
  url: string;
  // title: string;
  // description: string;
}

const images: Image[] = [
  {
    url: "images/home2.1.jpg",
    // title: "Mountain Landscape",
    // description: "Serene mountain peaks touching the clouds",
  },
  {
    url: "images/home2.2.jpg",
    // title: "Ocean Sunset",
    // description: "Beautiful sunset over the calm ocean",
  },
  {
    url: "images/home2.3.jpg",
    // title: "Forest Path",
    // description: "Mystical path through an ancient forest",
  },
  {
    url: "images/home2.4.jpg",
    // title: "Forest Path",
    // description: "Mystical path through an ancient forest",
  },
  {
    url: "images/home2.5.jpg",
    // title: "Forest Path",
    // description: "Mystical path through an ancient forest",
  },
  {
    url: "images/home2.6.jpg",
    // title: "Forest Path",
    // description: "Mystical path through an ancient forest",
  }
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <p className="text-5xl font-bold text-[#823D14] mb-3 text-center pt-6 pb-6">
        Image Gallery
      </p>

      <div className="relative h-[500px] overflow-hidden rounded-2xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
              index === currentIndex
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={image.url}
              // alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#EBDAC6]/90 to-transparent text-[#823D14]">
              {/* <h3 className="text-2xl font-bold mb-2">{image.title}</h3> */}
              {/* <p className="text-sm text-[#895E3D]">{image.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E1C790]/80 hover:bg-[#D9AF70]/90 backdrop-blur-sm p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#823D14]" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E1C790]/80 hover:bg-[#D9AF70]/90 backdrop-blur-sm p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#823D14]" />
      </button> */}
      <button
        onClick={prevSlide}
        className="hidden sm:absolute sm:left-4 sm:top-1/2 sm:-translate-y-1/2 sm:bg-[#E1C790]/80 sm:hover:bg-[#D9AF70]/90 sm:backdrop-blur-sm sm:p-2 sm:rounded-full sm:transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#823D14]" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden sm:absolute sm:right-4 sm:top-1/2 sm:-translate-y-1/2 sm:bg-[#E1C790]/80 sm:hover:bg-[#D9AF70]/90 sm:backdrop-blur-sm sm:p-2 sm:rounded-full sm:transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#823D14]" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#823D14]" : "bg-[#D9AF70]/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
