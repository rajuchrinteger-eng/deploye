
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, UserPlus, MapPin, Building } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

const ChannelForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Section className="bg-coffee-950 py-32 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,165,116,0.05),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coffee-accent text-[10px] uppercase font-black tracking-[0.6em] mb-4 block">Onboarding</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">Channel <br/><span className="italic text-coffee-accent">Partner</span></h2>
            <p className="text-coffee-200/60 text-lg font-light leading-relaxed mb-12">
              Ready to take the next step? Fill in the details to initiate the official vetting process. Our channel development team will reach out within 48 hours.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-center gap-4 text-coffee-300">
                  <CheckCircle2 size={18} className="text-coffee-accent" />
                  <span className="text-sm">Verified Brand License</span>
               </div>
               <div className="flex items-center gap-4 text-coffee-300">
                  <CheckCircle2 size={18} className="text-coffee-accent" />
                  <span className="text-sm">Exclusive Territory Rights</span>
               </div>
               <div className="flex items-center gap-4 text-coffee-300">
                  <CheckCircle2 size={18} className="text-coffee-accent" />
                  <span className="text-sm">Full Tech Integration</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-10 md:p-14 rounded-[3.5rem] shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle2 size={64} className="text-coffee-accent mx-auto mb-6" />
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Application Sent</h3>
                <p className="text-coffee-400">Our regional manager will contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-xs font-black uppercase tracking-widest text-coffee-accent underline underline-offset-8">New Application</button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-500">Full Name</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-coffee-accent transition-colors" placeholder="e.g. John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-500">Contact Number</label>
                    <input type="tel" required className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-coffee-accent transition-colors" placeholder="+91 ..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-500">Proposed Location / City</label>
                    <input type="text" required className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-coffee-accent transition-colors" placeholder="City Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-coffee-500">Investment Budget</label>
                    <select className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-coffee-accent transition-colors cursor-pointer">
                      <option className="bg-coffee-950">Below 10 Lakhs</option>
                      <option className="bg-coffee-950">10 - 20 Lakhs</option>
                      <option className="bg-coffee-950">Above 20 Lakhs</option>
                    </select>
                  </div>
                </div>
                
                <Button type="submit" className="w-full py-6 text-xs font-black tracking-[0.4em] uppercase">
                  Initiate Partnership <Send size={16} className="ml-2" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ChannelForm;
