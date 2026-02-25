import React from 'react';
import { motion } from 'framer-motion';

// Fix: Omit standard HTML button props that conflict with motion.button's custom handlers (like onDrag)
interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyle = "px-8 py-4 rounded-full font-serif font-medium tracking-wide transition-all duration-500 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-coffee-accent text-coffee-950 border border-coffee-accent",
    outline: "bg-transparent text-coffee-accent border border-coffee-accent",
    ghost: "text-coffee-100 hover:text-coffee-accent"
  };

  return (
    <motion.button 
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      
      {/* 
        4) Button & CTA Energy Micro-interaction 
      */}
      
      {/* Inner Glow / Halo Effect on Hover */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        variants={{
          hover: { 
            boxShadow: "inset 0 0 15px rgba(255, 255, 255, 0.3)",
            backgroundColor: variant === 'primary' ? "rgb(166, 130, 94)" : "rgba(140, 107, 74, 0.1)",
          }
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Subtle Energy Ripple passing through */}
      <motion.div 
        className="absolute top-0 bottom-0 left-[-100%] w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        variants={{
          hover: { left: "200%", transition: { duration: 1, ease: "easeInOut" } }
        }}
      />
    </motion.button>
  );
};

export default Button;