import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  const baseStyles = "py-2 px-4 rounded-md transition-colors";
  const variantStyles = {
    primary: "bg-[#D9AF70] text-white hover:bg-[#E1C790]", // Soft rose with light olive hover
    secondary: "bg-[#F6EFE9] text-[#823D14] hover:bg-[#EBDAC6]" // Light beige with deep brown and light cream hover
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
