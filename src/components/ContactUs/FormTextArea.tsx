import React from 'react';

interface FormTextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
  className?: string; // Add this line to accept className
}

const FormTextArea = ({ label, name, value, onChange, required, className }: FormTextAreaProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name} className="block text-sm font-medium text-[#823D14] mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        required={required}
        className="block w-full px-4 py-3 border border-[#D9AF70] rounded-lg focus:ring-2 focus:ring-[#E1C790] focus:border-[#D9AF70] transition"
      />
    </div>
  );
};

export default FormTextArea;
