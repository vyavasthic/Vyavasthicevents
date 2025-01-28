// import React from "react";
// import Hero from "../components/ContactUs/ContactHero.tsx";
// import ContactForm from "../components/ContactUs/ContactForm.tsx";
// import ContactInfo from "../components/ContactUs/ContactInfo.tsx";
// import Map from "../components/ContactUs/Map.tsx";
// import FAQ from "../components/ContactUs/FAQ.tsx";
// // import Phonenumber from './Phonenumber';

// function ContactUs() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F6EFE9] to-white">
//       <Hero />

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Left Column - Contact Form */}
//           <div className="bg-white rounded-2xl shadow-xl p-8">
//             <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">Send Us a Message</h2>
//             <p className="text-[#823D14] mb-8">
//               Ready to start planning your perfect wedding? Fill out the form
//               below and one of our wedding specialists will get back to you
//               within 24 hours.
//             </p>
//             <ContactForm />
//             {/* <img src="images/bg.jpeg" alt="" className="mt-24 h-auto rounded-lg"/> */}
            
//           </div>

//           {/* Right Column - Contact Information */}
//           <div className="lg:pl-8">
//             <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">Get in Touch</h2>
//             <p className="text-[#823D14] mb-8">
//               Whether you're just starting to plan your wedding or you're ready
//               to dive into the details, we're here to help make your special day
//               unforgettable.
//             </p>
//             <ContactInfo />
//             <Map />
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <FAQ />

//         {/* Additional Information */}
//         <div className="mt-16 text-center">
//           <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">
//             Ready to Begin Your Journey?
//           </h2>
//           <p className="text-[#823D14] max-w-2xl mx-auto">
//             Your dream wedding awaits! Our team of experienced wedding planners
//             is here to turn your vision into reality. Contact us today to
//             schedule a free consultation and let's start planning your perfect
//             day together.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
import React from "react";
import Hero from "../components/ContactUs/ContactHero.tsx";
import ContactForm from "../components/ContactUs/ContactForm.tsx";
import ContactInfo from "../components/ContactUs/ContactInfo.tsx";
import Map from "../components/ContactUs/Map.tsx";
import FAQ from "../components/ContactUs/FAQ.tsx";
// import Phonenumber from './Phonenumber';
// import Globe from "../components/GlobeComponent.tsx";
// import GlobeComponent from "../components/GlobeComponent.tsx";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6EFE9] to-white">
      <Hero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">
              Send Us a Message
            </h2>
            <p className="text-[#823D14] mb-8">
              Ready to start planning your perfect wedding? Fill out the form
              below and one of our wedding specialists will get back to you
              within 24 hours.
            </p>
            <ContactForm />
            {/* <img src="images/bg.jpeg" alt="" className="mt-24 h-auto rounded-lg"/> */}
            {/* <GlobeComponent></GlobeComponent> */}
          </div>

          {/* Right Column - Contact Information */}
          <div className="lg:pl-8">
            <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">
              Get in Touch
            </h2>
            <p className="text-[#823D14] mb-8">
              Whether you're just starting to plan your wedding or you're ready
              to dive into the details, we're here to help make your special day
              unforgettable.
            </p>
            <ContactInfo />
          </div>
        </div>
        <Map />
        {/* FAQ Section */}
        <FAQ />

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#823D14]">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-[#823D14] max-w-2xl mx-auto">
            Your dream wedding awaits! Our team of experienced wedding planners
            is here to turn your vision into reality. Contact us today to
            schedule a free consultation and let's start planning your perfect
            day together.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;