import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
// import Phonenumber from "../../pages/Phonenumber";
import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

// Replace these with your EmailJS credentials
const EMAILJS_SERVICE_ID = "service_42c2iqf";
const EMAILJS_TEMPLATE_ID = "template_k4zkspy";
const EMAILJS_PUBLIC_KEY = "5i_Ts7bvHUBFjgcSk";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    guestCount: "",
    budget: "",
    message: "",
    preferredTime: "",
    hearAboutUs: "",
  });
  const [value, setValue] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS Logic
      const templateParams = {
        to_email: "test10166603@gmail.com", // Replace with your Gmail address
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        date: formData.date,
        venue: formData.venue,
        guest_count: formData.guestCount,
        budget: formData.budget,
        message: formData.message,
        preferred_time: formData.preferredTime,
        hear_about_us: formData.hearAboutUs,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Notify success for EmailJS
      // toast.success("Message sent successfully!");

      // Send the same data to the backend for MongoDB storage
      const response = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          style: {
            fontSize: "20px", // Increase font size
            padding: "16px", // Add padding
            maxWidth: "600px", // Adjust the width
            textAlign: "center", // Center-align the text
            backgroundColor: "#4caf50", // Optional: Custom background color
            color: "white", // Optional: Custom text color
          },
        });
      } else {
        toast.error("Message not send");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        venue: "",
        guestCount: "",
        budget: "",
        message: "",
        preferredTime: "",
        hearAboutUs: "",
      });
    } catch (error) {
      console.error("Error during submission:", error);
      toast.error("message not sent");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#823D14]">
          <FormInput
            label="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="flex flex-col w-full max-w-md mx-auto">
            {/* Label */}
            <label
              htmlFor="phone-input"
              className="block text-sm text-[#823D14] mb-2" // Deep brown color for label
            >
              Phone Number
            </label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              inputClass="!border !border-[#E1C790] !shadow-sm !h-[50px] !w-full sm:w-[244px] !pl-16 !pr-4 text-sm text-[#823D14] focus:!border-[#D9AF70] focus:!ring focus:!ring-[#EBDAC6]" // Deep brown text color
              containerClass="!w-full !rounded-lg"
              buttonClass="!bg-[#F6EFE9] !border !border-[#D9AF70] !rounded-l-lg !hover:bg-[#EBDAC6]"
              dropdownClass="!rounded-lg !shadow-lg"
            />
          </div>

          <FormInput
            label="Wedding Date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <FormInput
            label="Preferred Destination (if any)"
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
          />
          <FormInput
            label="Estimated Guest Count"
            type="number"
            name="guestCount"
            value={formData.guestCount}
            onChange={handleChange}
          />
          <FormInput
            label="Budget Range"
            type="text"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          />
          <FormInput
            label="Preferred Contact Time"
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#823D14]">
            How did you hear about us?
          </label>
          <select
            className="mt-1 block w-full px-4 py-3 bg-white border border-[#D9AF70] rounded-lg focus:ring-2 focus:ring-pink-200 focus:border-pink-300 transition text-[#823D14]"
            value={formData.hearAboutUs}
            onChange={(e) => handleChange("hearAboutUs", e.target.value)}
          >
            <option value="" className="text-[#823D14]">
              Please select
            </option>{" "}
            {/* Text color for "Please select" */}
            <option value="social">Social Media</option>
            <option value="search">Search Engine</option>
            <option value="referral">Friend/Family Referral</option>
            <option value="wedding_fair">Wedding Fair</option>
            <option value="other">Other</option>
          </select>
        </div>

        <FormTextArea
          label="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-auto px-8 py-4 bg-[#823D14] hover:bg-[#D9AF70] text-white rounded-lg transition-colors flex items-center justify-center gap-2 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send size={18} />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
