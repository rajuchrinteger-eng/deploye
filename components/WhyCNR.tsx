
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, RefreshCw, TrendingUp, ShieldCheck, Map, FlaskConical, Cpu, Truck, GraduationCap } from 'lucide-react';
import Section from './ui/Section';
import { WHY_CNR_DATA } from '../constants';

const WhyCNR: React.FC = () => {
  const iconMap: Record<string, any> = {
    Zap: Zap,
    RefreshCw: RefreshCw,
    TrendingUp: TrendingUp,
    Map: Map,
    FlaskConical: FlaskConical,
    Cpu: Cpu,
    Truck: Truck,
    GraduationCap: GraduationCap
  };

  return (
    <Section className="bg-[#0A0705] py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-coffee-accent text-[10px] uppercase font-black tracking-[0.6em] mb-4 block">Difference Makers</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tighter leading-[1.1]">
              The Power Of <br/><span className="italic text-coffee-accent">Consistency.</span>
            </h2>
            <p className="text-xl text-coffee-200/60 font-light leading-relaxed mb-16 max-w-lg">
              Beyond just serving caffeine, we've engineered a destination. Our model is built on high-frequency retention and radical operational transparency.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {WHY_CNR_DATA.map((item, idx) => {
                const Icon = iconMap[item.icon] || Zap;
                return (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex flex-col gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-coffee-accent/50 group-hover:bg-coffee-accent/10 transition-all duration-500">
                      <Icon className="text-coffee-accent w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-coffee-accent transition-colors">{item.title}</h3>
                      <p className="text-coffee-400 text-xs leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="relative aspect-[4/5] w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-coffee-accent/10 to-transparent rounded-[4rem] blur-[120px] opacity-30 animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-[3.5rem] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)]">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-[1.1] hover:grayscale-0 transition-all duration-1000" 
                  alt="CnR Interior" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-12 left-12 right-12 bg-black/40 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-coffee-accent flex items-center justify-center text-coffee-950">
                        <ShieldCheck size={20} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-white">Certified Success Model</span>
                   </div>
                   <p className="text-sm text-coffee-200/80 leading-relaxed font-light italic">
                     "We've optimized every square inch of our layout to maximize throughput during peak hours while maintaining a premium atmospheric experience."
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default WhyCNR;
