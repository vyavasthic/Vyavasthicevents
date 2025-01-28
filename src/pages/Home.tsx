import React from "react";
import ImageSlider from "../components/ImageSlider";
import { Award, Calendar, Heart, Star, Users } from "lucide-react";
// import GallerySlider from "./GallarySlider";
// import Hero from "./Hero";
import GallarySlider from '../components/GallarySlider';
import Hero from "../components/Hero";
// import App from './Datetime';

export default function Home() {
  return (
    <div>
      <ImageSlider />
      {/* <App/> */}

      {/* About Us Section */}
      <section className="py-20 bg-[#F6EFE9]" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-bold text-[#823D14] mb-4"
              id="About us"
            >
              About Us
            </h2>
            <p className="text-xl text-[#895E3D] max-w-3xl mx-auto">
              With over four years of experience delivering exceptional events
              worldwide, we specialize in transforming your vision into reality.
              Whether it's luxury weddings, exclusive parties, or corporate
              events, we excel in crafting seamless, elegant experiences that
              leave a lasting impression. Every event we design reflects our
              commitment to detail, creativity, and the unique story you wish to
              tell.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#E1C790] p-6 rounded-lg shadow-lg text-center">
              <Award className="w-12 h-12 text-[#895E3D] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#823D14]">
                Experienced
              </h3>
              <p className="text-[#895E3D]">
                Delivering excellence in event management
              </p>
            </div>

            <div className="bg-[#E1C790] p-6 rounded-lg shadow-lg text-center">
              <Users className="w-12 h-12 text-[#895E3D] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#823D14]">
                Happy Clients
              </h3>
              <p className="text-[#895E3D]">
                Trust us with your special moments
              </p>
            </div>

            <div className="bg-[#E1C790] p-6 rounded-lg shadow-lg text-center">
              <Calendar className="w-12 h-12 text-[#895E3D] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#823D14]">
                Events
              </h3>
              <p className="text-[#895E3D]">
                Successfully planned and executed
              </p>
            </div>

            <div className="bg-[#E1C790] p-6 rounded-lg shadow-lg text-center">
              <Heart className="w-12 h-12 text-[#895E3D] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-[#823D14]">
                100% Satisfaction
              </h3>
              <p className="text-[#895E3D]">Guaranteed for every event</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallarySlider />

      <br />
      <br />

      {/* Hero Section */}
      <Hero />
    </div>
  );
}
