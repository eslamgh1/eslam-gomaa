import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsSetDark] = useState(false);

  useEffect(() => {
    const storeThemed = localStorage.getItem("theme");
    if (storeThemed === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSetDark(true); // sun
    } else {
      setIsSetDark(false); // moon
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsSetDark(false); // moon
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsSetDark(true); // sun
    }
  };


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
