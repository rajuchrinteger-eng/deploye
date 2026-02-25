
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Package, Zap, Wrench, CheckCircle2, ChevronRight } from 'lucide-react';
import Section from './ui/Section';
import { SUPPLIES_CATALOG } from '../constants';

const Supplies: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SUPPLIES_CATALOG[0].id);

  const icons: Record<string, any> = {
    "beverage-raw": Coffee,
    "flavoring": Zap,
    "packaging": Package,
    "kitchen-utility": Wrench
  };

  // Enhance the sweetener list specifically for the UI view
  const catalog = SUPPLIES_CATALOG.map(cat => {
    if (cat.id === "beverage-raw") {
      return {
        ...cat,
        items: cat.items.map(group => {
          if (group.group === "Sweeteners") {
            return { ...group, list: ["Natuuchakra (Unrefined Sugar)", "Coconut Sugar", "Palm Sugar", "Brown Sugar Sachets"] };
          }
          return group;
        })
      };
    }
    return cat;
  });

  const selectedCat = catalog.find(c => c.id === activeCategory) || catalog[0];

  return (
    <Section id="supplies" className="bg-[#0A0705] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-accent text-[10px] uppercase font-black tracking-[0.6em] mb-4 block">Centralized Supply Chain</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">Consumable <br/><span className="italic text-coffee-accent">Inventory</span></h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-coffee-400 max-w-md font-light leading-relaxed italic"
          >
            Empowering the Elite experience through a 100% natural, health-conscious inventory of premium raw materials.
          </motion.p>
        </div>

        {/* Desktop Layout */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 items-start">
          
          {/* Sidebar Navigation */}
          <div className="space-y-4">
            {catalog.map((cat) => {
              const Icon = icons[cat.id] || Coffee;
              const isActive = activeCategory === cat.id;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full group text-left p-6 rounded-[2rem] border transition-all duration-500 relative overflow-hidden ${
                    isActive 
                      ? 'bg-coffee-accent border-coffee-accent shadow-[0_20px_40px_-10px_rgba(212,165,116,0.3)]' 
                      : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                      isActive ? 'bg-coffee-950 text-coffee-accent' : 'bg-coffee-900 text-coffee-600 group-hover:text-coffee-accent'
                    }`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black uppercase tracking-widest transition-colors duration-500 ${
                        isActive ? 'text-coffee-950' : 'text-coffee-100'
                      }`}>
                        {cat.name}
                      </h3>
                      <p className={`text-[10px] mt-1 transition-colors duration-500 ${
                        isActive ? 'text-coffee-950/70' : 'text-coffee-500'
                      }`}>
                        {cat.items.length} Groups
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white/[0.02] border border-white/5 rounded-[3.5rem] p-10 md:p-14 overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
                  <div className="w-full md:w-48 aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shrink-0">
                    <img src={selectedCat.image} className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700" alt={selectedCat.name} />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{selectedCat.name}</h3>
                    <p className="text-coffee-300 font-light italic leading-relaxed max-w-lg">{selectedCat.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {selectedCat.items.map((group, gIdx) => (
                    <div key={gIdx} className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-px bg-coffee-accent/40" />
                        <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-coffee-500">{group.group}</h4>
                      </div>
                      <ul className="space-y-4 pl-4">
                        {group.list.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-4 text-coffee-100 group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-coffee-accent/30 group-hover/item:bg-coffee-accent transition-colors duration-300" />
                            <span className="text-sm md:text-base font-light tracking-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
};

export default Supplies;
