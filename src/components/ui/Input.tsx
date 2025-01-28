interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string; // New error prop
}

export default function Input({ 
  label, 
  id, 
  className = '', 
  error,  // Capture the error prop
  ...props 
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[#823D14] mb-2">
        {label}
      </label>
      <input
        id={id}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9AF70] ${className}`}
        {...props}
      />
      {/* Conditionally render error message */}
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
}
