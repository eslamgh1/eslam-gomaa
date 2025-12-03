// src/components/ThemeToggle.jsx

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className }) => { 
  const [isDarkMode, setIsSetDark] = useState(true); 

  useEffect(() => {
    const storeThemed = localStorage.getItem("theme");
    
    if (storeThemed === "light") {
      document.documentElement.classList.remove("dark");
      setIsSetDark(false); 
    } 
    else { 
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSetDark(true); 
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to Light Mode
      setIsSetDark(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      // Switch to Dark Mode
      setIsSetDark(true); // Setting state
      document.documentElement.classList.add("dark");
      // 🔑 CRITICAL FIX: Setting the 'theme' key in localStorage
      localStorage.setItem("theme", "dark"); 
    }
    // Dispatch event to update other components (like StarBackground)
    window.dispatchEvent(new Event('theme-changed'));
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-hidden",
        className
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