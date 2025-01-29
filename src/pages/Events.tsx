import React from 'react';
import EventCard from '../components/events/EventCard';
import { events } from '../data/events';
import Prevgallary from '../components/Prevgallary';

export default function Events() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Previous Events Section */}
      {/* <h1 className="text-4xl font-bold text-center mb-12 text-[#823D14]">Previous Events</h1> */}
      <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">Previous Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Previous Gallery Section */}
      <div className="mt-12">
        {/* <h1 className="text-4xl font-bold text-center mb-12 text-[#823D14]">Previous Gallery</h1> */}
        <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">Event Gallery</h1>
        <Prevgallary />
      </div>
    </div>
  );
}
