import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import Section from './ui/Section';
import { FRANCHISE_STATS } from '../constants';

const Franchise: React.FC = () => {
  return (
    <section id="franchise" className="py-24 bg-coffee-950 relative overflow-hidden">
      {/* Decorative Gold Lines */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coffee-accent to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-coffee-accent font-bold tracking-widest uppercase mb-4 block">Business Opportunity</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-coffee-50 mb-8 leading-tight">
            Start Your <br/>
            Coffee Business <br/>
            <span className="text-coffee-accent">With CnR</span>
          </h2>
          <p className="text-coffee-200 text-lg mb-8 leading-relaxed">
            Join a rapidly growing brand with a proven business model. We provide training, supply chain management, and marketing support to ensure your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FRANCHISE_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className={`bg-coffee-900 p-8 rounded-2xl border border-white/5 hover:border-coffee-accent/30 transition-all ${idx === 2 ? 'md:col-span-2' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-coffee-accent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-coffee-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
          
          {/* Highlight for Franchise PDF Downloads */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 mt-6 p-8 bg-gradient-to-br from-coffee-accent to-orange-500 rounded-3xl text-coffee-950 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(212,165,116,0.25)]"
          >
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-serif font-bold mb-1">Franchise PDF Downloads</h3>
              <p className="text-sm font-semibold opacity-80">Get the complete guide and investment portfolio.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shrink-0">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-coffee-950 text-coffee-accent rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl"
              >
                <Download size={14} /> Guide PDF
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;