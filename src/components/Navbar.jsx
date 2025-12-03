import { useState, useEffect, useRef } from "react"; // Import useRef
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Use a ref to persist the scroll position across renders
  const scrollPositionRef = useRef(0);

  // Effect for handling header styling on scroll (No Change)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔒 REVISED SCROLL LOCKING LOGIC to prevent jump
  useEffect(() => {
    if (isMenuOpen) {
      // 1. Capture the current scroll position
      scrollPositionRef.current = window.scrollY;

      // 2. Apply the compensation style to the body
      // We apply a negative 'top' equal to the scroll position to keep content in place
      document.body.style.top = `-${scrollPositionRef.current}px`;

      // 3. Apply scroll lock class (which must include position: fixed in CSS)
      document.body.classList.add('no-scroll');
      document.documentElement.classList.add('no-scroll');

    } else {
      // 1. Remove scroll lock class
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');

      // 2. Remove the compensation style immediately
      document.body.style.top = '';

      // 3. Restore the original scroll position
      window.scrollTo({
        top: scrollPositionRef.current,
        behavior: 'instant' // Use 'instant' here for a smooth removal of the fixed positioning
      });
    }

    // Cleanup: Ensure all styles are removed if the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
      document.documentElement.classList.remove('no-scroll');
      document.body.style.top = '';
    };
  }, [isMenuOpen]);

  // Handler for mobile menu links (No Change from last version)
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Wait 300ms for menu close transition to complete
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  };


  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Eslam </span>
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle className="" />
        </div>

        {/* Mobile Nav Toggle Button */}
        <div className="flex items-center md:hidden z-[60]">
          <ThemeToggle className="mr-2" />
          <button
            className="p-2 text-foreground"
            aria-label={isMenuOpen ? "close menu" : "Open menue"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
          </button>

        </div>
        {/* Mobile Nav Overlay */}
        <div className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex-col items-center justify-center",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto flex"
            : "opacity-0 pointer-events-none hidden"
        )}>
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};