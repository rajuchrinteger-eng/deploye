
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Leaf, HeartPulse, Sparkles, Coins, Smartphone, Zap, GraduationCap, ShieldCheck, MapPin, Globe, Mail, Briefcase, Award } from 'lucide-react';
import Section from './ui/Section';

const AboutCNR: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] pt-24">
      {/* 1. HERO - THE BRAND SOUL */}
      <Section className="py-32 md:py-48 bg-gradient-to-b from-[#0D0B09] to-[#050505]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.span variants={itemVariants} className="text-coffee-accent text-[10px] uppercase font-black tracking-[0.6em] mb-12 block">
            EST. 2016 | NOVEL BRANDED COFFEE
          </motion.span>
          <motion.h2 variants={itemVariants} className="text-5xl md:text-[7.5rem] font-serif font-bold text-white mb-12 leading-[0.95] tracking-tighter">
            The Soul of <br className="hidden md:block" />
            <span className="text-coffee-accent italic font-normal">Recharge.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-coffee-200 text-lg md:text-2xl font-light italic opacity-80 mb-16">
            "Recharge Yourself Over a Cup Of Coffee"
          </motion.p>
          <motion.div variants={itemVariants} className="w-24 h-px bg-coffee-800 mx-auto" />
        </motion.div>
      </Section>

      {/* 2. PHILOSOPHY (Vision & Mission) - CHAPTER I */}
      <Section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-coffee-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">CHAPTER I: PHILOSOPHY</span>
              <h3 className="text-4xl md:text-8xl font-serif font-bold text-white mb-10 tracking-tight leading-[0.9]">
                The Vision & <br/><span className="text-coffee-accent italic font-normal">Mission</span>
              </h3>
              <div className="space-y-6 text-coffee-100 font-light leading-relaxed text-lg">
                <p>Coffee n Recharge is a unique and innovative business concept that blends premium coffee experiences with smart utility services, creating a multi-revenue model designed for today’s fast-paced lifestyle.</p>
                <p className="opacity-70">We believe a coffee break should do more than refresh—it should recharge both people and possibilities. Our mission is to empower aspiring entrepreneurs through a proven, scalable, and low-risk business model.</p>
                <p className="opacity-70">Our outlets are thoughtfully designed to serve customers who seek quality beverages while conveniently accessing essential services such as mobile charging, bill payments, and digital solutions—all under one roof.</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { 
                  icon: Leaf, 
                  title: "The Natuuchakra Movement", 
                  desc: "A pioneering movement discouraging refined sugar. We promote Natuuchakra (unrefined cane sugar), Coconut and Palm Sugar for a 100% guilt-free recharge." 
                },
                { 
                  icon: HeartPulse, 
                  title: "Functional Wellness", 
                  desc: "Ayurvedic Coffee concepts like Chuku Mali (ginger-pepper) to aid digestion and immunity, bridging taste with daily health." 
                },
                { 
                  icon: Coins, 
                  title: "Entrepreneurial Empowerment", 
                  desc: "A unique 'No-Royalty' ethical stance. We believe the brand's success is built on the partner's hard work, ensuring zero deductions from daily sales." 
                }
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 p-8 rounded-[2.5rem] hover:border-coffee-accent/30 transition-all group flex items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-coffee-950 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <card.icon className="text-coffee-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{card.title}</h4>
                    <p className="text-coffee-400 text-sm leading-relaxed font-light">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 3. OVERVIEW (The Ecosystem) - CHAPTER II */}
      <Section className="py-32 bg-[#0A0705]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale-[30%]" 
                alt="Founder Sampath Mohanraj" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-[10px] font-black tracking-widest text-coffee-accent uppercase block mb-4">Founder & Visionary Leader</span>
                <p className="text-white text-3xl font-serif font-bold mb-2">Mr. Sampath Mohanraj</p>
                <p className="text-coffee-300 text-sm italic font-light">"Strong systems, customer-centric operations, and sustainable growth."</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-coffee-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">CHAPTER II: OVERVIEW</span>
              <h3 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">Visionary <br/><span className="text-coffee-accent italic font-normal">Leadership</span></h3>
              <div className="space-y-8 text-coffee-100 font-light leading-relaxed text-lg">
                <div className="flex gap-6 items-start">
                  <Briefcase className="text-coffee-accent shrink-0 mt-1" size={28} />
                  <div>
                    <h5 className="text-white font-bold mb-2 tracking-tight">24+ Years of Experience</h5>
                    <p className="text-sm opacity-70">Founder Mr. Sampath Mohanraj brings over two decades of expertise in distribution and brand building. His distinguished journey includes a significant tenure at Hindustan Unilever, ensuring world-class standard operations.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Award className="text-coffee-accent shrink-0 mt-1" size={28} />
                  <div>
                    <h5 className="text-white font-bold mb-2 tracking-tight">Innovation & Consistency</h5>
                    <p className="text-sm opacity-70">A network redefined as a 'novel branded coffee shop'. We create high-footfall, high-engagement spaces that generate multiple income streams while delivering everyday convenience.</p>
                  </div>
                </div>
                <div className="p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] text-sm opacity-80 leading-relaxed italic">
                  "Today, Coffee n Recharge continues to grow as a trusted brand, supporting entrepreneurs, delighting customers, and redefining how modern café businesses operate."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* 4. HELP (Support Network) - CHAPTER III */}
      <Section className="py-32 bg-[#0D0B09] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-coffee-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">CHAPTER III: HELP</span>
            <h3 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 tracking-tight leading-tight">The Support <br/><span className="text-coffee-accent italic font-normal">Network</span></h3>
            <p className="text-coffee-300 max-w-2xl mx-auto font-light leading-relaxed">We don't just set up shops; we build careers. Our comprehensive support system ensures every partner has the tools to succeed from day one.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: "Training Academy", desc: "Rigorous certification for baristas and store managers." },
              { icon: ShieldCheck, title: "Quality Audit", desc: "Regular inspections to maintain CnR's gold standard." },
              { icon: Globe, title: "Marketing Engine", desc: "Centralized digital marketing and brand visibility campaigns." },
              { icon: MapPin, title: "Site Selection", desc: "Expert analysis to identify high-potential locations." },
              { icon: Smartphone, title: "Tech Stack", desc: "Integrated POS, inventory, and digital service portal." },
              { icon: Zap, title: "Fast ROI", desc: "Optimized operational costs for quicker profitability." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-coffee-accent/20 transition-all flex flex-col items-center text-center"
              >
                <div className="w-12 h-12 rounded-full bg-coffee-950 border border-white/10 flex items-center justify-center mb-6">
                  <item.icon className="text-coffee-accent" size={20} />
                </div>
                <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
                <p className="text-coffee-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. CORPORATE GROUNDING - MATCHING REFERENCE IMAGE */}
      <Section className="py-32 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
             <motion.h3 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tight"
             >
               Corporate Grounding
             </motion.h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Left Card: Physical HQ */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] p-12 md:p-16 rounded-[4rem] border border-white/5 flex flex-col justify-between min-h-[500px] shadow-2xl"
            >
              <div>
                <MapPin className="text-coffee-accent mb-12" size={40} strokeWidth={1.5} />
                <h4 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10 leading-tight">Physical Headquarters</h4>
                <address className="text-coffee-200 not-italic text-xl font-light leading-[1.8] opacity-70">
                  2, 8B, VOC Colony, 2nd Main Road,<br />
                  Kodambakkam, Chennai,<br />
                  Tamil Nadu - 600024.
                </address>
              </div>
              <div className="mt-20 pt-10 border-t border-white/[0.08]">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-coffee-800 block mb-3">OPERATED BY</span>
                <span className="text-white font-bold text-xl tracking-tight">Mini Holdings / Idha E-Tail Arks</span>
              </div>
            </motion.div>

            {/* Right Card: Contact Details */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#0A0A0A] p-12 md:p-16 rounded-[4rem] border border-white/5 space-y-16 shadow-2xl"
            >
              {/* Contact Block */}
              <div>
                <Smartphone className="text-coffee-accent mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-coffee-600 mb-4">Direct Contact</h4>
                <div className="space-y-2">
                  <a href="tel:+919884766523" className="block text-3xl md:text-5xl font-serif font-bold text-white hover:text-coffee-accent transition-all duration-300 tracking-tight">+91 98847 66523</a>
                  <a href="tel:+919884096523" className="block text-2xl md:text-3xl font-serif font-bold text-coffee-200 hover:text-coffee-accent transition-all duration-300 opacity-80">+91 98840 96523</a>
                </div>
              </div>
              
              {/* Correspondence Block */}
              <div>
                <GraduationCap className="text-coffee-accent mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-coffee-600 mb-4">Official Correspondence</h4>
                <a href="mailto:miniholdingsadmin@gmail.com" className="block text-xl md:text-2xl text-coffee-100 font-light hover:text-coffee-accent transition-all duration-300 break-all leading-relaxed">miniholdingsadmin@gmail.com</a>
              </div>

              {/* Web Block */}
              <div>
                <Globe className="text-coffee-accent mb-8" size={32} strokeWidth={1.5} />
                <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-coffee-600 mb-4">Web Presence</h4>
                <div className="flex flex-col gap-3">
                  <a href="https://www.miniholdings.in" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl text-coffee-100 font-serif font-bold hover:text-coffee-accent transition-all duration-300">www.miniholdings.in</a>
                  <a href="https://www.coffeenrecharge.com" target="_blank" rel="noopener noreferrer" className="text-lg text-coffee-400 font-light hover:text-coffee-accent transition-all duration-300 opacity-60">www.coffeenrecharge.com</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutCNR;
