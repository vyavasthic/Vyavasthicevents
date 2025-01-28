import React, { useState, useEffect, useCallback } from 'react';
import { Event } from '../../types';
import { Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % event.images.length);
  }, [event.images.length]);

  const prevSlide = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + event.images.length) % event.images.length
    );
  }, [event.images.length]);

  // Auto-slide logic
  useEffect(() => {
    if (event.images && event.images.length > 0 && autoSlide) {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000); // Auto-slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [event.images, autoSlide, nextSlide]);

  // Pause auto-slide on interaction
  const handleManualNavigation = (index: number) => {
    setAutoSlide(false);
    setCurrentImageIndex(index);
    setTimeout(() => setAutoSlide(true), 3000); // Resume auto-slide after 3 seconds
  };

  return (
    <div className="bg-[#F6EFE9] rounded-lg shadow-lg overflow-hidden relative">
      {/* Image Slider */}
      {event.images && event.images.length > 0 && (
        <div className="relative w-full h-64">
          {event.images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                index === currentImageIndex
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${event.title} image ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {event.images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex
                    ? 'bg-[#823D14] opacity-100'
                    : 'bg-[#D9AF70] opacity-60'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Event Details */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-[#823D14] mb-2">{event.title}</h3>
        <div className="flex items-center text-[#D9AF70] mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          {new Date(event.date).toLocaleDateString()}
        </div>
        <div className="flex items-center text-[#D9AF70] mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          {event.venue}
        </div>
        <p className="text-[#823D14] mb-4">{event.description}</p>
        {event.testimonial && (
          <blockquote className="italic text-[#823D14] border-l-4 border-[#823D14] pl-4">
            "{event.testimonial}"
          </blockquote>
        )}
      </div>
    </div>
  );
}
