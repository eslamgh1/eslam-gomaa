// src/components/ThemeToggle.jsx

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  // KEY CHANGE 1: Set initial state to TRUE (Dark Mode)
  const [isDarkMode, setIsSetDark] = useState(true); 

  useEffect(() => {
    const storeThemed = localStorage.getItem("theme");
    
    // Check if the theme is explicitly set to 'light'
    if (storeThemed === "light") {
      document.documentElement.classList.remove("dark");
      setIsSetDark(false); // moon
    } 
    // If theme is 'dark' OR if 'theme' is null (first visit), apply dark mode
    else { 
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // KEY CHANGE 2: Set default stored theme to 'dark'
      setIsSetDark(true); // sun
    }
  }, []);

  const toggleTheme = () => {
    // ... (This function remains correct)
    if (isDarkMode) {
      setIsSetDark(false); // moon
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSetDark(true); // sun
    }
    // Dispatch event to update StarBackground
    window.dispatchEvent(new Event('theme-changed'));
  };

  // ... (rest of the component)
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className=" h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};