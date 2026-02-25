import React from 'react';
import { motion } from 'framer-motion';

export const Steam: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 left-1/2 w-4 h-16 bg-white blur-xl rounded-full opacity-0"
          animate={{
            y: [-20, -100],
            opacity: [0, 0.4, 0],
            scale: [1, 2],
            x: [0, (i % 2 === 0 ? 20 : -20)]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeOut",
            delay: i * 1.5
          }}
        />
      ))}
    </div>
  );
};