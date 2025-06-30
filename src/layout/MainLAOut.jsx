import React, { useState } from 'react';
import HeroSection from '../pages/HeroSection';
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Navbar from '../pages/Navbar';
import Skills from '../pages/Skill';
import EducationExperience from '../pages/Education';
import Projects from '../pages/Projects';
import Footer from '../pages/Footer';
import { ToastContainer } from 'react-toastify';

const MainLaOut = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };
    return (
           <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection />
        <AboutMe />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
        <Footer />
          <ToastContainer 
          position="top-center" 
          autoClose={3000} 
          hideProgressBar={false} 
          newestOnTop={false} 
          closeOnClick 
          rtl={false} 
          pauseOnFocusLoss 
          draggable 
          pauseOnHover 
          theme={darkMode ? "dark" : "light"} 
        />
      </div>
    </div>
    );
};

export default MainLaOut;