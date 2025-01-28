import React, { useEffect, useRef } from "react";
import VenueCard from "../components/venues/VenueCard";
import { venues } from "../data/venues";

export default function Venues() {
  const localRef = useRef<HTMLDivElement | null>(null);
  const globalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScrollToSection = () => {
      const hash = window.location.hash;
      const offset = 63; // Offset for the padding at the top
      const smoothScrollTo = (element: HTMLElement) => {
        const top = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      };

      if (hash === "#local" && localRef.current) {
        smoothScrollTo(localRef.current);
      } else if (hash === "#global" && globalRef.current) {
        smoothScrollTo(globalRef.current);
      }
    };

    // Handle initial scroll
    handleScrollToSection();

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleScrollToSection);

    // Cleanup event listener
    return () => {
      window.removeEventListener("hashchange", handleScrollToSection);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-[#F6EFE9]">
      <h1 className="text-5xl font-extrabold text-center text-[#823D14] mb-12">
        Suggested Destinations
      </h1>

      <section ref={localRef} id="local" className="mb-16">
        <h2 className="text-4xl font-semibold text-[#895E3D] mb-8 pt-8">Destinations in India</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.local.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>

      <section ref={globalRef} id="global">
        <h2 className="text-4xl font-semibold text-[#895E3D] mb-8 pt-8">Global Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {venues.international.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>
      </section>
    </div>
  );
}
