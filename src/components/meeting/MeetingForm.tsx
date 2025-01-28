import React, { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Card from "../ui/Card";
import RadioGroup from "../ui/RadioGroup";
import { validateEmail, validatePhone } from "../../utils/validation";
import { isValidDate } from "../../utils/date";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";

const EMAILJS_SERVICE_ID = "service_59pnnbb";
const EMAILJS_TEMPLATE_ID = "template_21ujfjg";
const EMAILJS_PUBLIC_KEY = "5i_Ts7bvHUBFjgcSk";

interface MeetingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  venue: string;
  guestCount: string;
  message: string;
  meetingType: "online" | "offline";
}

interface FormErrors {
  [key: string]: string;
}

export default function MeetingForm() {
  const [formData, setFormData] = useState<MeetingFormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    guestCount: "",
    message: "",
    meetingType: "offline",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [controlledValue, setControlledValue] = useState<Dayjs | null>(null);

  const meetingOptions = [
    { label: "In-Person Meeting (Office)", value: "offline" },
    { label: "Video Call", value: "online" },
  ];

  // This useEffect ensures that the controlledValue persists even when the screen size changes
  useEffect(() => {
    if (formData.date) {
      setControlledValue(dayjs(formData.date));
    }
  }, [formData.date]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email))
      newErrors.email = "Invalid email address";
    if (!validatePhone(formData.phone))
      newErrors.phone = "Invalid phone number";
    if (!formData.date) newErrors.date = "Date is required"; // Check if date is selected

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Format the date for better readability (e.g., "MM/DD/YYYY hh:mm A")
      const formattedDate = controlledValue ? controlledValue.format("MM/DD/YYYY hh:mm A") : "";

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        date: formattedDate,  // Send the formatted date to EmailJS
        venue: formData.venue,
        guestCount: formData.guestCount,
        message: formData.message,
        meetingType: formData.meetingType,
      };

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Save data to MongoDB via API
      const response = await fetch("http://localhost:5000/api/meetings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          style: {
            fontSize: "20px",
            padding: "16px",
            maxWidth: "600px",
            textAlign: "center",
            backgroundColor: "#4caf50",
            color: "white",
          },
        });
      } else {
        toast.error("message not sent");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        venue: "",
        guestCount: "",
        message: "",
        meetingType: "offline",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to schedule meeting");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Card className="p-8 bg-[#F6EFE9] shadow-xl rounded-xl">
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup
          label="Meeting Type"
          name="meetingType"
          options={meetingOptions}
          value={formData.meetingType}
          onChange={(value) =>
            setFormData({
              ...formData,
              meetingType: value as "online" | "offline",
            })
          }
          className="text-[#823D14]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#823D14]">
          <Input
            label="Name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            required
            className="border-[#823D14]"
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={errors.email}
            required
            className="border-[#823D14]"
          />
          <div className="flex flex-col w-full max-w-md mx-auto">
            <label htmlFor="phone-input" className="block text-sm text-[#823D14] mb-2">
              Phone Number
            </label>
            <PhoneInput
              country={"in"}
              value={formData.phone}
              onChange={(value) => handleChange("phone", value)}
              inputClass="!border-[#823D14] !border !border-gray-200 !shadow-sm !h-[50px] !w-full sm:w-[244px] !pl-16 !pr-4 text-sm text-[#823D14] focus:!border-blue-500 focus:!ring focus:!ring-blue-200"
              containerClass="!w-full !rounded-lg border-[#823D14]"
              buttonClass="!bg-gray-100 !border-[#823D14] !border !border-gray-300 !rounded-l-lg !hover:bg-gray-200"
              dropdownClass="!rounded-lg !shadow-lg"
            />
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col w-full max-w-md mx-auto">
              <label htmlFor="date" className="text-sm text-[#823D14] mb-2">
                Preferred Date & Time
              </label>
              <DateTimePicker
                label={controlledValue ? "" : "Select Date & Time"}
                value={controlledValue}
                onChange={(newValue) => {
                  setControlledValue(newValue);
                  setFormData({
                    ...formData,
                    date: newValue ? newValue.format() : "",
                  });
                }}
                className="w-full"
                sx={{
                  "& .MuiInputBase-root": {
                    backgroundColor: "white", // Background color removed
                    color: "#5C4033",
                    borderRadius: "4px",
                    border: "1px solid #D99A6D",
                    height: "50px", // Adjust the height here
                    paddingTop: "12px", // Add padding to adjust vertical alignment
                    paddingBottom: "12px", // Adjust padding to match other input fields
                  },
                  "& .MuiInputLabel-root": { color: "#823D14" },
                  "& .MuiSvgIcon-root": { color: "#823D14" },
                  "& .MuiPickersDay-root": {
                    color: "#5C4033",
                    "&.Mui-selected": {
                      backgroundColor: "#D99A6D",
                      color: "white",
                    },
                    "&:hover": {
                      backgroundColor: "#D99A6D",
                      color: "white",
                    },
                  },
                  "& .MuiButton-root": {
                    color: "#823D14",
                    backgroundColor: "transparent", // Background color removed for button
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#D99A6D",
                    },
                  },
                }}
              />
            </div>
          </LocalizationProvider>

          {formData.meetingType === "offline" && (
            <>
              <Input
                label="Preferred destination (If any)"
                type="text"
                value={formData.venue}
                onChange={(e) =>
                  setFormData({ ...formData, venue: e.target.value })
                }
                className="border-[#823D14]"
              />
              <Input
                label="Expected Guest Count"
                type="number"
                value={formData.guestCount}
                onChange={(e) =>
                  setFormData({ ...formData, guestCount: e.target.value })
                }
                required
                className="border-[#823D14]"
              />
            </>
          )}
        </div>

        <div>
          <label className="block text-[#823D14] mb-2">Additional Details</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-[#823D14] rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
            rows={4}
          />
        </div>
        <Button
          type="submit"
          fullWidth
          className="bg-[#823D14] hover:bg-[#D9AF70] text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Request Meeting"}
        </Button>
      </form>
    </Card>
  );
}
