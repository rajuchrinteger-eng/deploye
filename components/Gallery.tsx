
import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { Instagram } from 'lucide-react';

const INSTAGRAM_VIDEOS = [
  "https://videos.pexels.com/video-files/4440955/4440955-sd_360_640_30fps.mp4",
  "https://videos.pexels.com/video-files/4255018/4255018-sd_360_640_25fps.mp4",
  "https://videos.pexels.com/video-files/5243452/5243452-sd_360_640_30fps.mp4",
  "https://videos.pexels.com/video-files/3326164/3326164-sd_360_640_25fps.mp4",
  "https://videos.pexels.com/video-files/4440958/4440958-sd_360_640_30fps.mp4"
];

const Gallery: React.FC = () => {
  const displayVideos = [...INSTAGRAM_VIDEOS, ...INSTAGRAM_VIDEOS, ...INSTAGRAM_VIDEOS];
  
  const getCardWidth = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) return 240;
    return 320;
  };

  const [cardWidth, setCardWidth] = React.useState(getCardWidth());
  const gap = 24;
  const scrollOffset = (cardWidth + gap) * INSTAGRAM_VIDEOS.length;

  React.useEffect(() => {
    const handleResize = () => setCardWidth(getCardWidth());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section className="bg-coffee-950 px-0 pt-10 md:pt-12 pb-32 md:pb-48 overflow-hidden">
      <div className="text-center mb-12 md:mb-16 relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <div className="w-6 md:w-8 h-[1px] bg-coffee-accent/40" />
          <span className="text-coffee-accent uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-black">
            Our Stories
          </span>
          <div className="w-6 md:w-8 h-[1px] bg-coffee-accent/40" />
        </motion.div>
        
        <h2 className="text-4xl md:text-7xl font-serif text-coffee-50 mt-2 font-bold tracking-tight">
          Captured <span className="text-coffee-accent italic">Moments</span>
        </h2>
        <p className="text-coffee-300/60 mt-4 max-w-lg mx-auto text-sm italic font-light px-4">
          A glimpse into the daily life at CnR – where every brew is a memory.
        </p>
      </div>

      <div className="relative w-full">
        <div className="overflow-hidden py-6 md:py-10">
          <motion.div 
            className="flex gap-6"
            animate={{
              x: [0, -scrollOffset],
            }}
            transition={{
              duration: window.innerWidth < 768 ? 25 : 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {displayVideos.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
                className="relative w-[240px] md:w-[320px] aspect-[9/16] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] group flex-shrink-0 bg-coffee-900 border border-white/5"
              >
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-coffee-accent/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute top-4 left-4 md:top-6 md:left-6 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-6 md:w-8 h-[1px] bg-white/10" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-coffee-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-coffee-950 to-transparent z-20 pointer-events-none" />
      </div>

      <div className="mt-16 md:mt-20 text-center px-6">
        <motion.a
          href="https://instagram.com/coffeenrecharge"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 md:gap-4 px-8 md:px-12 py-4 md:py-5 bg-coffee-950 border border-white/10 rounded-full hover:border-coffee-accent transition-all duration-500 group overflow-hidden relative shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white flex items-center gap-3">
            <Instagram size={window.innerWidth < 768 ? 16 : 20} />
            Follow us on Instagram
          </span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:animate-pulse pointer-events-none" />
        </motion.a>
        
        <div className="mt-8">
           <p className="text-coffee-800 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em]">
             @COFFEENRECHARGE
           </p>
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
