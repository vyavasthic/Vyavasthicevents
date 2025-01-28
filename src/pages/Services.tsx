import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#F6EFE9]">
      <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
