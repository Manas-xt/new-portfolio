import React from 'react';

export function ShineBorder({ children, color = ["#A07CFE", "#FE8FB5", "#FFBE7B"] }) {
  return (
    <div className="relative group w-full h-full">
      {/* Gradient border with animation */}
      <div
        className="absolute -inset-[2px] rounded-[2rem] blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
        style={{
          background: `linear-gradient(to right, ${color.join(', ')})`
        }}
      />
      <div
        className="absolute -inset-[2px] rounded-[2rem] opacity-75 group-hover:opacity-100"
        style={{
          background: `linear-gradient(to right, ${color.join(', ')})`
        }}
      />
      
      {/* Content */}
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
} 