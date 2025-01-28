import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What does a wedding planner do in wedding management?",
      answer: "A wedding planner oversees all aspects of the wedding, from the initial planning stages to the execution on the big day. This includes managing timelines, coordinating vendors, ensuring the ceremony and reception flow smoothly, and handling any last-minute changes to relieve stress for the couple."
    },
    {
      question: "How much does professional wedding management cost?",
      answer: "The cost of professional wedding management varies based on the services included and the location of the wedding. Depending on the level of service and the size of the event. Custom packages can be tailored to suit your budget and needs."
    },
    {
      question: "Do I need a wedding planner for small weddings?",
      answer: "While small weddings may seem manageable, a wedding planner can still help coordinate details like vendor management, timelines, and logistics, ensuring your day runs smoothly. A planner can also bring experience and professionalism to ensure a memorable event, regardless of size."
    },
    {
      question: "What are the benefits of hiring a wedding management company?",
      answer: "Hiring a wedding management company offers peace of mind, as they handle the planning, coordination, and execution of your wedding. They ensure that every detail is taken care of, from vendor selection to timeline management, so you can enjoy the day without stress or worry."
    },
    {
      question: "How can I plan a stress-free wedding?",
      answer: "To plan a stress-free wedding, start early, set a realistic budget, and hire professionals, such as a wedding planner or coordinator. Trust the experts to manage the details, and focus on enjoying the process. Be flexible and remember that things might not go exactly as planned, but that's okay."
    },
    {
      question: "Can you assist with finding wedding vendors?",
      answer: "Absolutely! We have an extensive list of trusted wedding vendors, including photographers, florists, caterers, and entertainers. We will work with you to find the perfect vendors for your wedding."
    },
    {
      question: "What happens if there is an emergency or last-minute change?",
      answer: "We understand that things don't always go as planned. Our team is experienced in managing emergencies and last-minute changes. We will work quickly and efficiently to adjust and ensure your wedding proceeds smoothly."
    }
  ];

  return (
    <div className="mt-16">
      <h2 className="text-4xl font-semibold mb-8 text-center" style={{ color: '#D9AF70' }}>Frequently Asked Questions</h2> {/* Gold color for the main heading */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#F6EFE9] p-6 rounded-lg shadow-md"> {/* Soft beige background */}
            <h3 className="font-medium text-lg mb-2" style={{ color: '#823D14' }}>{faq.question}</h3> {/* Deep brown color for question */}
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
