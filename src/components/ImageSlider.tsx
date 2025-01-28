import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  // {
  //   url: "/images/home1.jpg",
  //   title: "Create Unforgettable Moments",
  //   subtitle: "Professional Event Planning & Management",
  // },
  // {
  //   url: "/images/home2.jpg",
  //   title: "Wedding Planning Excellence",
  //   subtitle: "Making Your Special Day Perfect",
  // },
  // {
  //   url: "/images/home3.jpg",
  //   title: "Exquisite Destination weddings",
  //   subtitle: "Cherishes your beautiful day",
  // },
  {
    url: "/images/home1.jpg",
    title: "Create Unforgettable Moments",
    subtitle: "Expert Planning for Every Event",
    alt: "A beautifully arranged event with vibrant decorations and happy attendees",
  },
  {
    url: "/images/home2.jpg",
    title: "Wedding Planning Excellence",
    subtitle: "Crafting Memories for Your Special Day",
    alt: "A stunning wedding venue with elegant decor and a romantic atmosphere",
  },
  {
    url: "/images/home3.jpg",
    title: "Exquisite Destination Weddings",
    subtitle: "Celebrate in Stunning Locations",
    alt: "A breathtaking beach wedding setup with clear blue skies and white sand",
  },
];



const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === slides.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full" id="home">
      <div className="absolute inset-0">
        <img
          src={slides[currentIndex].url}
          className="w-full h-full object-cover transition-opacity duration-500"
          alt="Event"
        />
        <div className="absolute inset-0 bg-[#823D14]/50" />{" "}
        {/* Deep brown overlay */}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F6EFE9]">
        {" "}
        {/* Light beige text */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          {slides[currentIndex].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center">
          {slides[currentIndex].subtitle}
        </p>
      </div>

      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-[#F6EFE9]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-[#F6EFE9]" />
      </button> */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-[#F6EFE9]" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#D9AF70]/30 hover:bg-[#D9AF70]/40 backdrop-blur-sm p-2 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-[#F6EFE9]" />
      </button>
    </div>
  );
};

export default ImageSlider;
