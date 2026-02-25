
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Monitor, CreditCard, HeartPulse, 
  ShoppingBag, Dumbbell, GraduationCap, Users, 
  Car, Sparkles, Clapperboard, Building2, Home, Utensils
} from 'lucide-react';
import Section from './ui/Section';
import { COLLABORATIVE_SERVICES } from '../constants';

const Collaborations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = ['All', 'Institutional', 'Lifestyle', 'Strategic', 'Digital'];

  const filteredServices = activeFilter === 'All' 
    ? COLLABORATIVE_SERVICES 
    : COLLABORATIVE_SERVICES.filter(s => s.group === activeFilter);

  const icons: Record<string, any> = {
    "Utensils": Utensils,
    "Monitor": Monitor,
    "HeartPulse": HeartPulse,
    "ShoppingBag": ShoppingBag,
    "Dumbbell": Dumbbell,
    "Calendar": Calendar,
    "GraduationCap": GraduationCap,
    "CreditCard": CreditCard,
    "Users": Users,
    "Car": Car,
    "Sparkles": Sparkles,
    "Clapperboard": Clapperboard,
    "Building2": Building2,
    "Home": Home
  };

  return (
    <Section id="collaborations" className="bg-[#050505] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-coffee-accent text-[10px] uppercase font-black tracking-[0.6em] mb-4 block"
          >
            Growth Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Multi-Revenue <br className="md:hidden" /><span className="italic text-coffee-accent">Channels</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-coffee-300/60 max-w-2xl mx-auto italic font-light leading-relaxed"
          >
            CnR scales beyond the shop counter through strategic partnerships that secure high footfall and predictable revenue.
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeFilter === filter 
                  ? 'bg-coffee-accent border-coffee-accent text-coffee-950 shadow-[0_10px_30px_rgba(212,165,116,0.2)]' 
                  : 'bg-white/5 border-white/10 text-coffee-400 hover:border-white/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((item, idx) => {
              const Icon = icons[item.icon] || Monitor;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] hover:bg-white/[0.04] hover:border-coffee-accent/20 transition-all duration-700 group cursor-pointer flex flex-col h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                    <Icon size={120} />
                  </div>

                  <div className="mb-8 w-14 h-14 rounded-2xl bg-coffee-950 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <Icon className="text-coffee-accent" size={24} />
                  </div>

                  <div className="mb-4 relative z-10">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-coffee-600 mb-2 block">
                      {item.group}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-coffee-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-coffee-400 text-xs leading-relaxed mb-8 flex-1 relative z-10">
                    {item.description}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex flex-col gap-2 relative z-10">
                    <span className="text-[9px] uppercase tracking-widest font-black text-coffee-accent">
                      Key Benefit
                    </span>
                    <span className="text-white text-[11px] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.benefit}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Closing Stat */}
        <div className="mt-20 flex flex-col items-center">
           <div className="flex items-center gap-4 text-coffee-800 text-[10px] font-black uppercase tracking-[0.8em] mb-6">
             <div className="w-24 h-px bg-coffee-900" />
             PARTNERSHIP ECOSYSTEM
             <div className="w-24 h-px bg-coffee-900" />
           </div>
           <p className="text-coffee-600 text-xs italic opacity-60 text-center max-w-xl">
             We don't just sell coffee. We build high-frequency recharge stations for every aspect of modern life.
           </p>
        </div>
      </div>
    </Section>
  );
};

export default Collaborations;
