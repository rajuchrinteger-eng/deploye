
import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { TESTIMONIALS } from '../constants';
import { Play } from 'lucide-react';

const Testimonials: React.FC = () => {
  const displayItems = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];
  
  // Mobile responsive widths
  const getCardWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 320;
    return 720;
  };
  
  const [cardWidth, setCardWidth] = React.useState(getCardWidth());
  const gap = 40;
  const scrollOffset = (cardWidth + gap) * TESTIMONIALS.length;

  React.useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section className="bg-coffee-950 overflow-hidden pt-20 md:pt-24 pb-12">
      <div className="text-center mb-12 md:mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-coffee-accent uppercase tracking-widest text-[9px] md:text-[10px] font-black"
        >
          Visual Stories
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-6xl font-serif text-coffee-50 mt-4 font-bold px-4"
        >
          Community <span className="text-coffee-accent italic">Vibes</span>
        </motion.h2>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden py-6 md:py-10">
          <motion.div 
            className="flex gap-10 px-4"
            animate={{
              x: [0, -scrollOffset],
            }}
            transition={{
              duration: window.innerWidth < 768 ? 30 : 50,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {displayItems.map((t, idx) => (
              <motion.div
                key={`${t.id}-${idx}`}
                whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
                className="relative w-[320px] md:w-[720px] aspect-[16/10] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.95)] group flex-shrink-0 bg-coffee-900 border border-white/5"
              >
                {t.video && (
                  <div className="absolute inset-0 z-0">
                    <video
                      src={t.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-90 transition-all duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-coffee-accent/20 backdrop-blur-2xl border border-coffee-accent/50 flex items-center justify-center text-coffee-accent scale-75 group-hover:scale-100 transition-transform duration-500">
                     <Play size={window.innerWidth < 768 ? 24 : 40} fill="currentColor" />
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-coffee-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-coffee-950 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="mt-12 md:mt-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="inline-flex items-center gap-4 md:gap-6 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-coffee-700"
        >
          <div className="w-12 md:w-24 h-px bg-coffee-800" />
          Cinematic Moments
          <div className="w-12 md:w-24 h-px bg-coffee-800" />
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;
