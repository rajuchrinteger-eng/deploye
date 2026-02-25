import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 w-full overflow-hidden relative ${className}`}>
      {/* 
        Scroll-Based Energy Interaction:
        The section wrapper acts as the "circuit" that activates when in view.
      */}
      <motion.div
        initial="off"
        whileInView="on"
        viewport={{ once: true, margin: "-10%" }}
        variants={{
          off: { opacity: 0.9 }, // Start slightly dimmed
          on: { opacity: 1, transition: { duration: 1 } }
        }}
        className="max-w-7xl mx-auto relative"
      >
        {/* 
           3) Section Edge Energy (Very Light) 
           A thin line that travels across the top border when the section activates.
        */}
        <motion.div 
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-coffee-accent to-transparent w-full"
          variants={{
            off: { scaleX: 0, opacity: 0 },
            on: { 
              scaleX: 1, 
              opacity: [0, 0.4, 0], // Flash in then fade out
              transition: { duration: 1.5, ease: "easeInOut" } 
            }
          }}
        />

        {/* 
          Soft "Powering On" Backlight 
          A subtle radial glow that appears behind the content
        */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-coffee-accent/5 blur-[100px] rounded-full pointer-events-none -z-10"
          variants={{
            off: { opacity: 0, scale: 0.8 },
            on: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
          }}
        />

        {children}
      </motion.div>
    </section>
  );
};

export default Section;