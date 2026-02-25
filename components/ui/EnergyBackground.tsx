import React from 'react';
import { motion } from 'framer-motion';

const EnergyBackground: React.FC = () => {
  // We create a few "streams" of energy with different delays and durations
  // to create a non-repetitive, organic feel.
  
  const lines = [
    { id: 1, y: "10%", duration: 25, delay: 0, opacity: 0.03 },
    { id: 2, y: "35%", duration: 35, delay: 5, opacity: 0.02 },
    { id: 3, y: "65%", duration: 30, delay: 2, opacity: 0.04 },
    { id: 4, y: "85%", duration: 40, delay: 8, opacity: 0.02 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-full bg-coffee-950">
      {/* 1. Base Ambient Glow (Static but pulses slightly) */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(140,107,74,0.03),transparent_70%)]"
      />

      {/* 2. Flowing Energy Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgb(140, 107, 74)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        {lines.map((line) => (
          <motion.path
            key={line.id}
            d={`M -200, ${parseInt(line.y) + 20} C 200, ${line.y} 400, ${parseInt(line.y) + 50} 100%, ${line.y}`}
            stroke="url(#energyGradient)"
            strokeWidth="1.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0, x: -100 }}
            animate={{ 
              pathLength: [0, 1, 0], // Draws the line then undraws it
              opacity: [0, line.opacity, 0],
              x: ["0%", "10%", "0%"] // Subtle horizontal drift
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              ease: "linear",
              delay: line.delay,
              repeatDelay: 2
            }}
            style={{ filter: 'blur(2px)' }} // Soften the line
          />
        ))}

        {/* 3. Vertical Connectors (Rare, very slow) */}
        <motion.line 
          x1="15%" y1="0%" x2="15%" y2="100%" 
          stroke="url(#energyGradient)" 
          strokeWidth="1"
          strokeDasharray="10, 20"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "100%", opacity: [0, 0.05, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
        />
         <motion.line 
          x1="85%" y1="100%" x2="85%" y2="0%" 
          stroke="url(#energyGradient)" 
          strokeWidth="1"
          strokeDasharray="10, 20"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "-100%", opacity: [0, 0.05, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 10 }}
        />
      </svg>

      {/* 4. Grain Texture for "Analog" Feel */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
};

export default EnergyBackground;