import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";

const PhoneNumberInput: React.FC = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
      {/* Label */}
      <label
        htmlFor="phone-input"
        className="block text-sm font-semibold text-[#823D14] mb-2" // Deep brown color for label
      >
        Phone Number
      </label>

      {/* Phone Input */}
      <PhoneInput
        country={"in"}
        value={value}
        onChange={(phone) => setValue(phone || "")}
        inputClass="!border !border-[#E1C790] !shadow-sm !h-[50px] !w-full sm:w-[244px] !pl-16 !pr-4 text-sm text-[#823D14] focus:!border-[#D9AF70] focus:!ring focus:!ring-[#EBDAC6]" // Deep brown text color
        containerClass="!w-full !rounded-lg"
        buttonClass="!bg-[#F6EFE9] !border !border-[#D9AF70] !rounded-l-lg !hover:bg-[#EBDAC6]" // Light beige background and soft rose border, hover with light cream
        dropdownClass="!rounded-lg !shadow-lg"
      />
    </div>
  );
};

export default PhoneNumberInput;

