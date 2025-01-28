import React from 'react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-[#F6EFE9] rounded-lg shadow-lg overflow-hidden"> {/* Soft beige background */}
      <img 
        src={service.imageUrl} 
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2" style={{ color: '#823D14' }}>{service.name}</h3> {/* Gold color for the service name */}
        <p className="text-[#823D14] mb-4">{service.description}</p> {/* Deep brown color for the description */}
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <span 
              key={index}
              className="inline-block bg-[#EBDAC6] text-[#823D14] rounded-full px-3 py-1 text-sm mr-2 mb-2" 
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
