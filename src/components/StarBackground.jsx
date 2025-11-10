// src/components/StarBackground.jsx

import React, { useState, useEffect } from 'react';

// --- STYLES FOR DARK MODE (Visible Grid) ---
const darkGridStyle = {
  // Dark gray grid on a dark background
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='none' stroke='%23404040' stroke-width='.5'/%3E%3C/svg%3E")`,
};

// --- STYLES FOR LIGHT MODE (White Grid) ---
const lightGridStyle = {
  // Very light gray/off-white grid on a white background
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Crect width='10' height='10' fill='none' stroke='%23f0f0f0' stroke-width='.5'/%3E%3C/svg%3E")`,
};

export const StarBackground = () => {
  // Track the actual theme from local storage
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') || 'dark'
  );

  useEffect(() => {
    const handleThemeChange = () => {
      // Update the theme state whenever the custom event is dispatched
      setCurrentTheme(localStorage.getItem('theme'));
    };

    window.addEventListener('theme-changed', handleThemeChange);

    return () => {
      window.removeEventListener('theme-changed', handleThemeChange);
    };
  }, []);

  // Determine which styles to apply
  const isDark = currentTheme === 'dark';
  
  return (
    <div
      // Conditional Tailwind background class
      className={`absolute inset-0 w-full h-full z-0 ${isDark ? 'bg-gray-900' : 'bg-white'}`}
      // Conditional style object for the grid
      style={isDark ? darkGridStyle : lightGridStyle}
    />
  );
};