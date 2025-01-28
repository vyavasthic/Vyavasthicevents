import React from 'react';
import { Venue } from '../../types';
import { Users } from 'lucide-react';

interface VenueCardProps {
  venue: Venue;
}

export default function VenueCard({ venue }: VenueCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={venue.imageUrl} 
        alt={venue.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-[#823D14]">{venue.name}</h3>
        <p className="text-[#823D14] mb-4">{venue.description}</p>
        <div className="space-y-2">
          {venue.features.map((feature, index) => (
            <span 
              key={index}
              className="inline-block bg-[#D9AF70] text-[#823D14] rounded-full px-3 py-1 text-sm mr-2 mb-2"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
