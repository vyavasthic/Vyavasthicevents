import React from 'react';

interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  className?: string; // Added className prop
}

const FormInput = ({ label, type, name, value, onChange, required, className }: FormInputProps) => {
  return (
    <div className={`${className}`}>
      <label className="block text-sm font-medium text-[#823D14]">{label}</label>
      <input
        type={type}
        required={required}
        className="mt-1 block w-full px-4 py-3 bg-white border border-[#D9AF70] rounded-lg focus:ring-2 focus:ring-[#E1C790] focus:border-[#D9AF70] transition"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </div>
  );
};

export default FormInput;
