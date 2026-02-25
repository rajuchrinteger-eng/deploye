
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './ui/Button';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const contentY = useTransform(scrollY, [0, 500], [0, -100]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-coffee-950">
      
      {/* Background Image - Roasted Coffee Beans as seen in screenshot */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1920&auto=format&fit=crop"
            className="w-full h-full object-cover brightness-[0.35]"
            alt="Roasted Coffee Beans"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/40 via-transparent to-coffee-950" />
        </div>
      </div>

      <motion.div 
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center"
      >
        <motion.div
           initial="hidden"
           animate="visible"
           variants={{
             hidden: { opacity: 0 },
             visible: {
               opacity: 1,
               transition: { staggerChildren: 0.1, delayChildren: 0.2 }
             }
           }}
           className="flex flex-col items-center"
        >
             {/* Logo - Centered Top */}
             <motion.div
               variants={{
                 hidden: { opacity: 0, y: -20 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
               }}
               className="mb-12"
             >
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.ibb.co/vzB7pLq/logo.png" 
                    alt="CnR Logo" 
                    className="w-full h-full object-cover" 
                  />
                </div>
             </motion.div>

             {/* Main Title - Serif Bold */}
             <motion.h1 
               variants={{
                 hidden: { opacity: 0, y: 20 },
                 visible: { opacity: 1, y: 0, transition: { duration: 1 } }
               }}
               className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight"
             >
               Coffee n Recharge
             </motion.h1>

             {/* Divider Line */}
             <motion.div 
               variants={{
                 hidden: { opacity: 0, scaleX: 0 },
                 visible: { opacity: 0.6, scaleX: 1, transition: { duration: 1 } }
               }}
               className="w-20 h-[1.5px] bg-coffee-accent mb-6"
             />

             {/* Categories - Spaced Out Sans */}
             <motion.div 
               variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 1, transition: { duration: 0.8 } }
               }}
               className="flex items-center gap-4 text-[9px] md:text-[10px] text-white uppercase tracking-[0.4em] font-bold mb-10"
             >
               <span>COFFEE</span>
               <span className="text-coffee-600">•</span>
               <span>TEA</span>
               <span className="text-coffee-600">•</span>
               <span>SNACKS</span>
               <span className="text-coffee-600">•</span>
               <span>BEVERAGES</span>
             </motion.div>
             
             {/* Tagline - Italic Serif/Sans Mix as requested */}
             <motion.p 
               variants={{
                 hidden: { opacity: 0 },
                 visible: { opacity: 0.8, transition: { duration: 1 } }
               }}
               className="text-lg md:text-xl text-coffee-100 font-light italic mb-16 tracking-wide"
             >
               Roasting excellence, brewing energy.
             </motion.p>

             {/* Buttons - Pill Shaped */}
             <motion.div 
               variants={{
                 hidden: { opacity: 0, y: 20 },
                 visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
               }}
               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
             >
                <Button 
                    variant="primary" 
                    onClick={() => document.getElementById('menu')?.scrollIntoView({behavior: 'smooth'})}
                    className="min-w-[200px] !bg-coffee-accent !text-coffee-950 !py-3 !text-sm font-semibold rounded-full"
                >
                    Explore Menu
                </Button>
                
                <Button 
                    variant="outline"
                    onClick={() => document.getElementById('franchise')?.scrollIntoView({behavior: 'smooth'})}
                    className="min-w-[200px] !border-white/20 !text-white hover:!bg-white/10 !py-3 !text-sm font-semibold rounded-full"
                >
                    Join Franchise
                </Button>
             </motion.div>
        </motion.div>
      </motion.div>

      {/* Discover Bottom Indicator */}
      <motion.div 
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] text-white/50 uppercase tracking-[0.5em] font-bold">Discover</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
