import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  // {
  //   id: 1,
  //   name: "Aman $ Vaibhavi",
  //   role: "Married June 2023",
  //   content:
  //     "Our wedding day was absolutely perfect thanks to the incredible team. Every detail was handled with such care and precision. We couldn't have dreamed of a better celebration!",
  //   image:
  //     "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=300&h=300",
  // },
  // {
  //   id: 2,
  //   name: "Vikas $ Swati",
  //   role: "Married September 2023",
  //   content:
  //     "From the initial planning to the big day, everything was seamless. They turned our vision into reality and created memories that will last a lifetime.",
  //   image:
  //     "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=300&h=300",
  // },
  // {
  //   id: 3,
  //   name: "Gindi $ Shabina",
  //   role: "Married December 2023",
  //   content:
  //     "The attention to detail and personalized service we received was exceptional. Our winter wedding was magical beyond our wildest dreams!",
  //   image:
  //     "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=300&h=300",
  // },
  {
    id: 1,
    name: "Aman & vaibhavi",
    role: "Married June 2023",
    content:
      "Our wedding day was an unforgettable experience, thanks to the amazing team. Every detail was carefully handled, and it truly felt magical.",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 2,
    name: "Emily & Michael Chen",
    role: "Married September 2023",
    content:
      "From start to finish, the process was seamless. They brought our ideas to life and exceeded our expectations. A truly perfect day!",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&q=80&w=300&h=300",
  },
  {
    id: 3,
    name: "Jessica & David Rodriguez",
    role: "Married December 2023",
    content:
      "Our winter wedding was breathtaking! The team's dedication and attention to detail made it an enchanting experience we will cherish forever.",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&q=80&w=300&h=300",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#F6EFE9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#823D14] sm:text-4xl">
            Love Stories
          </h2>
          <p className="mt-4 text-xl text-[#D9AF70]">
            Hear from our wonderful couples
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="relative">
              <div className="flex flex-col items-center px-4 sm:px-6">
                <div className="relative w-24 h-24 mb-6">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover rounded-full shadow-lg"
                  />
                  <div className="absolute -top-2 -right-2 bg-[#823D14] p-2 rounded-full">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-xl italic text-[#823D14] mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <h3 className="text-lg font-semibold text-[#823D14]">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-[#D9AF70]">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#D9AF70] p-2 rounded-full shadow-lg hover:bg-[#D9AF70]/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-[#823D14]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#D9AF70] p-2 rounded-full shadow-lg hover:bg-[#D9AF70]/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-[#823D14]" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#823D14]" : "bg-[#D9AF70]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
