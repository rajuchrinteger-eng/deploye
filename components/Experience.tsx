import React from 'react';
import { motion } from 'framer-motion';
import { Zap, DollarSign, Clock, Armchair } from 'lucide-react';
import Section from './ui/Section';

const pillars = [
  { icon: Zap, title: "Premium Taste", desc: "Award-winning blends roasted to perfection." },
  { icon: DollarSign, title: "Affordable", desc: "Luxury experience at everyday prices." },
  { icon: Clock, title: "Quick Service", desc: "Efficient workflows for your busy lifestyle." },
  { icon: Armchair, title: "Cozy Spaces", desc: "Designed for comfort, work, and conversation." }
];

const Experience: React.FC = () => {
  return (
    <Section className="bg-coffee-800 relative overflow-hidden">
      {/* Background Pulse Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] opacity-10 pointer-events-none">
        <motion.div 
          className="absolute inset-0 rounded-full border-[100px] border-coffee-700"
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif text-coffee-50 mb-6">The CnR Experience</h2>
        <p className="text-coffee-200 max-w-2xl mx-auto">We don't just sell coffee; we provide the energy to fuel your ambitions.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-coffee-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-coffee-accent/50 transition-colors text-center group"
          >
            <div className="mb-6 inline-flex p-4 rounded-full bg-coffee-800 group-hover:bg-coffee-accent transition-colors duration-300">
              <pillar.icon className="w-8 h-8 text-coffee-accent group-hover:text-coffee-950 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-coffee-50 mb-3">{pillar.title}</h3>
            <p className="text-coffee-300">{pillar.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;