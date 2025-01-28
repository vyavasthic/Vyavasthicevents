import React from 'react';

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  className?: string; // Add className prop to the interface
}

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  className = '', // Default to an empty string
}: RadioGroupProps) {
  return (
    <div className={className}> {/* Apply the className to the root div */}
      <label className="block text-[#823D14] mb-2">{label}</label> {/* Deep brown color for label */}
      <div className="space-x-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="form-radio h-4 w-4 text-[#D9AF70] focus:ring-[#D9AF70]" // Soft rose color for radio button
            />
            <span className="ml-2 text-[#823D14]">{option.label}</span> {/* Deep brown color for option text */}
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Red color for errors */}
    </div>
  );
}
