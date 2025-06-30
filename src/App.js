// import React, { useState, useEffect } from 'react';
// import { Github, Linkedin, Mail, ExternalLink, Code, Database, Smartphone, Zap, Users, TrendingUp, ChevronDown } from 'lucide-react';
// import Styles from './components/Styles';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import AnimatedSection from './components/AnimatedSection'; // Import the new component

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [isScrolled, setIsScrolled] = useState(false);
//   const styles = Styles(isScrolled);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);

//       // More advanced active section highlighting (optional but recommended)
//       const sections = ['home', 'about', 'services', 'projects', 'contact'];
//       const scrollPosition = window.scrollY + window.innerHeight / 2;

//       for (const sectionId of sections) {
//         const element = document.getElementById(sectionId);
//         if (element && scrollPosition >= element.offsetTop) {
//           setActiveSection(sectionId);
//         }
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setActiveSection(sectionId);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       {/* Navigation */}
//       <Navigation
//         activeSection={activeSection}
//         scrollToSection={scrollToSection}
//         isScrolled={isScrolled}
//       />

//       {/* Hero Section (can have its own animation or be part of the animated sections) */}
//       <Hero
//         isScrolled={isScrolled}
//         scrollToSection={scrollToSection}
//       />

//       {/* About Section */}
//       <AnimatedSection id="about">
//         <About />
//       </AnimatedSection>

//       {/* Services Section */}
//       <AnimatedSection id="services">
//         <Services isScrolled={isScrolled} />
//       </AnimatedSection>

//       {/* Projects Section */}
//       <AnimatedSection id="projects">
//         <Projects isScrolled={isScrolled} />
//       </AnimatedSection>

//       {/* Contact Section */}
//       <AnimatedSection id="contact">
//         <Contact isScrolled={isScrolled} />
//       </AnimatedSection>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         <p>© 2025 Tahsanur Rahman. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Portfolio;





import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Styles from './components/Styles';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedSection from './components/AnimatedSection';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const styles = Styles(isScrolled);
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowScrollTop(scrollY > 500);

      // Find the active section
      for (const [id, element] of Object.entries(sectionRefs.current)) {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  // Function to assign refs to sections
  const setSectionRef = (id, element) => {
    if (element) {
      sectionRefs.current[id] = element;
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
      />

      {/* Hero Section */}
      <AnimatedSection id="home" setRef={setSectionRef}>
        <Hero scrollToSection={scrollToSection}  isScrolled={isScrolled} profileImage="dp.jpg"/>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" setRef={setSectionRef}>
        <About />
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services" setRef={setSectionRef}>
        <Services />
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" setRef={setSectionRef}>
        <Projects />
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" setRef={setSectionRef}>
        <Contact />
      </AnimatedSection>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.button
          style={styles.scrollTopButton}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1, backgroundColor: '#7c3aed' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Tahsanur Rahman. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;