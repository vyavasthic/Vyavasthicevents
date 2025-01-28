import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-[#F6EFE9] rounded-lg shadow-lg overflow-hidden ${className}`}> {/* Soft beige background */}
      {children}
    </div>
  );
}
