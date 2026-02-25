
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, X, MapPin, Building2, Users, FileCheck, ArrowRight, ShieldCheck, Play } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';
import { Steam } from './ui/Steam';
import { FRANCHISE_MODELS, FRANCHISE_WHY_US, FRANCHISE_STEPS, FRANCHISE_SUPPORT, FRANCHISE_STATS } from '../constants';

interface FranchisePageProps {
  onNavigate?: (view: any) => void;
}

// --- Inquiry Modal ---
const InquiryModal: React.FC<{ isOpen: boolean; onClose: () => void; prefilledModel?: string }> = ({ isOpen, onClose, prefilledModel }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-coffee-900 w-full max-w-lg rounded-3xl border border-coffee-accent/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coffee-accent to-orange-400" />
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-coffee-800 hover:bg-coffee-accent rounded-full text-white transition-colors z-10">
            <X size={20} />
          </button>

          <div className="p-8">
            <h3 className="text-2xl font-serif font-bold text-coffee-50 mb-2">Franchise Enquiry</h3>
            <p className="text-coffee-300 text-sm mb-6">Take the first step towards owning a CnR outlet.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Name</label>
                <input type="text" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="Your Full Name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Phone</label>
                    <input type="tel" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="+91..." />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">City</label>
                    <input type="text" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="Current City" />
                 </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Email</label>
                <input type="email" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Interested Model</label>
                <select className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" defaultValue={prefilledModel || "Elite"}>
                  <option value="Elite">CNR Elite</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Message</label>
                <textarea rows={3} className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="Any specific questions?"></textarea>
              </div>
              
              <Button className="w-full justify-center mt-2">Submit Enquiry</Button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};


const FranchisePage: React.FC<FranchisePageProps> = ({ onNavigate }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>('Elite');

  const openModal = (model: string) => {
    setSelectedModel(model);
    setModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-coffee-950 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-coffee-950 via-coffee-900 to-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-coffee-900/20 skew-x-12 transform origin-top-right blur-3xl"></div>
        <Steam className="left-1/4 top-3/4 opacity-20" />

        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-24 pb-12">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-accent/10 border border-coffee-accent/20 text-coffee-accent text-xs font-bold tracking-widest uppercase mb-6">
                    <span className="w-2 h-2 rounded-full bg-coffee-accent animate-pulse"></span>
                    Franchise Opportunity
                 </div>
                 <h1 className="text-4xl md:text-7xl font-serif font-bold text-coffee-50 leading-[1.1] mb-6">
                    Build Your Legacy <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coffee-accent to-orange-200">With CnR</span>
                 </h1>
                 <p className="text-lg md:text-xl text-coffee-200 font-light mb-8 leading-relaxed max-w-lg">
                    Join India's fastest-growing coffee network. Partner with a brand that values quality and transparency.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <Button variant="primary" onClick={() => openModal('Elite')}>Start Enquiry</Button>
                    <Button variant="outline" onClick={() => document.getElementById('models')?.scrollIntoView({behavior: 'smooth'})}>View Model</Button>
                 </div>
                 
                 <div className="mt-12 flex gap-8 border-t border-white/10 pt-8">
                    {FRANCHISE_STATS.slice(0, 3).map((stat, i) => (
                        <div key={i}>
                            <div className="text-2xl md:text-3xl font-serif text-coffee-50 font-bold">{stat.value}{stat.suffix}</div>
                            <div className="text-xs text-coffee-400">{stat.label}</div>
                        </div>
                    ))}
                 </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block h-[600px] w-full"
            >
                <div className="absolute top-0 right-0 w-[90%] h-[90%] z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                    <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop" alt="Cafe Interior" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-serif text-xl">Elite Experience</div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* 3. Franchise Model - Fixed Alignment and Redirect to Channel Partnership */}
      <Section id="models" className="bg-[#050505] py-20 md:py-32">
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-coffee-accent uppercase tracking-[0.5em] text-[10px] font-black mb-4 block"
          >
            SELECTED FORMAT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight"
          >
            The Franchise Format
          </motion.h2>
        </div>

        <div className="max-w-2xl mx-auto px-4">
          {FRANCHISE_MODELS.map((model, idx) => (
            <motion.div 
              key={model.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] rounded-[3rem] md:rounded-[4rem] p-10 md:p-16 border border-white/5 shadow-2xl relative overflow-hidden"
            >
              <div className="mb-14">
                <h3 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
                  {model.name}
                </h3>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 120 }}
                  className="h-[2.5px] bg-coffee-accent" 
                />
              </div>
              
              <div className="bg-white/[0.01] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden">
                <div className="divide-y divide-white/[0.04]">
                  {model.details.map((row, rIdx) => (
                    <div key={rIdx} className="flex justify-between items-center px-10 py-6 group hover:bg-white/[0.02] transition-all duration-300">
                      <span className="text-[10px] md:text-[11px] text-coffee-500 font-black uppercase tracking-[0.25em] group-hover:text-coffee-400 transition-colors">
                        {row.label}
                      </span>
                      <span className="text-white text-base md:text-xl font-bold text-right ml-4 group-hover:text-coffee-accent transition-colors">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Button 
                  variant="primary" 
                  onClick={() => openModal('Elite')} 
                  className="w-full justify-center !text-xs font-black tracking-[0.3em] uppercase !py-6"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate && onNavigate('channel')} 
                  className="w-full justify-center bg-transparent border-white/10 text-white hover:border-coffee-accent hover:text-coffee-accent hover:bg-white/5 !text-xs font-black tracking-[0.3em] uppercase !py-6"
                >
                  Contact Us
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 6. How It Works */}
      <Section className="bg-[#0A0705] py-24 md:py-32">
        <div className="text-center mb-20 md:mb-28 px-4">
          <motion.h2 className="text-5xl md:text-6xl font-serif text-white mb-4">How It Works</motion.h2>
          <motion.p className="text-coffee-300 text-lg md:text-xl font-light italic">Simple steps to launch your business with us.</motion.p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-6">
           <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-coffee-800/50 -translate-x-1/2" />
           <div className="relative z-10 space-y-20 md:space-y-32">
             {FRANCHISE_STEPS.map((step, idx) => {
               const isEven = idx % 2 === 0;
               return (
                 <motion.div key={idx} className="flex items-center justify-center w-full relative">
                   <div className={`flex-1 ${isEven ? 'text-right pr-8 md:pr-24' : 'hidden md:block'}`}>
                     {isEven && (
                       <div className="space-y-3">
                         <h3 className="text-2xl md:text-4xl font-serif text-white font-bold tracking-tight">{step.title}</h3>
                         <p className="text-coffee-300 text-sm md:text-lg font-light italic opacity-70">{step.desc}</p>
                       </div>
                     )}
                   </div>
                   <div className="relative shrink-0 z-20">
                     <div className="w-5 h-5 md:w-8 md:h-8 rounded-full bg-[#0A0705] border-[3px] md:border-4 border-coffee-accent shadow-[0_0_20px_rgba(212,165,116,0.5)]" />
                   </div>
                   <div className={`flex-1 ${!isEven ? 'text-left pl-8 md:pl-24' : 'hidden md:block'}`}>
                     {!isEven && (
                       <div className="space-y-3">
                         <h3 className="text-2xl md:text-4xl font-serif text-white font-bold tracking-tight">{step.title}</h3>
                         <p className="text-coffee-300 text-sm md:text-lg font-light italic opacity-70">{step.desc}</p>
                       </div>
                     )}
                   </div>
                 </motion.div>
               );
             })}
           </div>
        </div>
      </Section>

      <InquiryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} prefilledModel={selectedModel} />
    </div>
  );
};

export default FranchisePage;
