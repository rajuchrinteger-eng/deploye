import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import Button from './ui/Button';

interface MenuPreviewProps {
  onNavigate?: () => void;
}

const MenuPreview: React.FC<MenuPreviewProps> = ({ onNavigate }) => {
  const categories = [
    {
      id: 'chai-eggs',
      title: 'Chai & Eggslusive',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop',
      delay: 0.1
    },
    {
      id: 'coffee',
      title: 'The Signature Brews',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop',
      delay: 0.2
    }
  ];

  return (
    <Section id="menu" className="bg-coffee-950 overflow-hidden pt-32 pb-48">
      {/* Section Header */}
      <div className="text-center mb-24 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-[1px] bg-coffee-accent mb-6" />
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 tracking-tight">Our Specialty</h2>
          <p className="text-coffee-300 text-lg md:text-xl font-light leading-relaxed italic opacity-60">
            Discover the heart of CNR through our most celebrated collections.
          </p>
        </motion.div>
      </div>

      {/* Two Large Menu Category Portals - Now Plain Images */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: cat.delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative h-[600px] md:h-[750px] cursor-pointer rounded-[3rem] overflow-hidden shadow-2xl border border-white/5"
            onClick={onNavigate}
          >
            {/* Plain Image with Zoom Animation on Hover */}
            <div className="absolute inset-0 z-0">
              <motion.img 
                src={cat.image} 
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Action Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 flex flex-col items-center gap-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-coffee-accent to-transparent opacity-30" />
        
        <Button 
          variant="primary" 
          onClick={onNavigate}
          className="min-w-[280px] shadow-[0_0_50px_rgba(212,165,116,0.2)] hover:shadow-[0_0_70px_rgba(212,165,116,0.4)]"
        >
          View Full Menu Gallery
        </Button>
        
        <p className="text-[10px] uppercase tracking-[0.5em] text-coffee-500 font-bold">
          Scroll to explore locations
        </p>
      </motion.div>
    </Section>
  );
};

export default MenuPreview;