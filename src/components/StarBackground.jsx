// src/components/StarBackground.jsx

import React from 'react';

// Define the style object for the subtle grid background
const gridBackgroundStyle = {
  // SVG for a 10x10 darker gray grid line pattern
  // Changed from %23f0f0f0 to %23404040 (a medium-dark gray)
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='none' stroke='%23404040' stroke-width='.5'/%3E%3C/svg%3E")`,
};

export const StarBackground = () => {
  return (
    <div
      // KEY CHANGE: Changed bg-white to bg-gray-900 (or another dark shade)
      // and applied the darker grid line style
      className="absolute inset-0 w-full h-full bg-gray-900 z-0" 
      style={gridBackgroundStyle}
    />
  );
};