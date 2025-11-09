// src/pages/Home.jsx

import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/Skills";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
  return (
    <>
      {/* KEY CHANGE: Add 'relative' to make it the positioning context for StarBackground */}
      <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden"> 
        
        <ThemeToggle />
        
        {/* The StarBackground (now the Grid Background) */}
        <StarBackground /> 
        
        {/* All content must have a higher z-index (z-10, z-20, etc.) to sit on top */}
        <div className="relative z-10"> 
          <Navbar />
          
          {/* Main Content */}
          <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
          </main>
          
          <Footer/>
        </div>
      </div>
    </>
  );
};