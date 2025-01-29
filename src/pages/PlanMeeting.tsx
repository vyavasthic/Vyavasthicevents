import React from 'react';
import MeetingForm from '../components/meeting/MeetingForm';
import Testimonials from '../components/Testimonials';

export default function PlanMeeting() {
  return (
    <div>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">
          Plan Your Wedding
        </h1>
        <p className="text-[#895E3D] text-center mb-12">
          Fill out the form below to schedule a consultation with one of our
          wedding planners.
        </p>
        <MeetingForm />
      </div>
      <Testimonials />
    </div>
  );
}
