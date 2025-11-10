import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  // isDarkMode: true means dark theme (Sun icon visible)
  // isDarkMode: false means light theme (Moon icon visible)
  const [isDarkMode, setIsSetDark] = useState(true); 

  useEffect(() => {
    const storeThemed = localStorage.getItem("theme");
    // Ensure the initial state of the component matches the storage
    if (storeThemed === "dark") {
      document.documentElement.classList.add("dark");
      setIsSetDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsSetDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      // Switching to LIGHT mode (Moon icon will be visible)
      setIsSetDark(false); 
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      
      // OPTIONAL: You could explicitly set another flag here
      // localStorage.setItem("background", "hidden");
      
    } else {
      // Switching to DARK mode (Sun icon will be visible)
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSetDark(true);
      
      // OPTIONAL: You could explicitly set another flag here
      // localStorage.setItem("background", "visible");
    }
    
    // IMPORTANT: Dispatch a custom event to notify other components (like StarBackground)
    window.dispatchEvent(new Event('theme-changed'));
  };


  return (
    <button
      onClick={toggleTheme}
      // Added a background for the button itself for visibility in light mode
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        isDarkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-200 hover:bg-gray-300",
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