import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { LOCATIONS } from '../constants';
import { MapPin } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <Section className="bg-coffee-900 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-coffee-50">Our Locations</h2>
        <p className="text-coffee-300 mt-2">Find your nearest recharge station.</p>
      </div>

      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-coffee-950 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-20">
             {/* Simple grid to simulate map */}
            <div className="w-full h-full" style={{ 
                backgroundImage: 'radial-gradient(#5D4037 1px, transparent 1px)', 
                backgroundSize: '20px 20px' 
            }}></div>
        </div>

        {/* Pins */}
        {LOCATIONS.map((loc, idx) => (
          <motion.div
            key={loc.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
            initial={{ opacity: 0, scale: 0, y: -50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: "spring" }}
          >
            <div className="relative">
              <MapPin className="w-8 h-8 text-coffee-accent drop-shadow-lg fill-coffee-900" />
              <motion.div 
                className="absolute inset-0 bg-coffee-accent rounded-full -z-10"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            
            {/* Tooltip */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white text-coffee-950 px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 pointer-events-none">
              <p className="font-bold text-sm">{loc.city}</p>
              <p className="text-xs text-coffee-600">{loc.address}</p>
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Locations;