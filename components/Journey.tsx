import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './ui/Section';

const JourneyStep: React.FC<{ 
  title: string; 
  desc: string; 
  number: string; 
  image: string;
  isEven: boolean;
}> = ({ title, desc, number, image, isEven }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-coffee-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
        </div>
      </motion.div>
      
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-8xl font-serif font-bold text-white/5 absolute -z-10 select-none">
          {number}
        </span>
        <h3 className="text-4xl font-serif text-coffee-50 font-semibold">{title}</h3>
        <p className="text-coffee-200 text-lg leading-relaxed">{desc}</p>
        <div className="h-1 w-20 bg-coffee-accent rounded-full" />
      </motion.div>
    </div>
  );
};

const Journey: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "The Bean",
      desc: "We source only the top 1% of Arabica beans from sustainable farms at high altitudes. Every bean tells a story of its origin.",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "02",
      title: "The Roast",
      desc: "Small-batch roasting brings out the complex flavor notes. From light floral hints to deep chocolate undertones, we master the heat.",
      image: "https://images.unsplash.com/photo-1515442261605-65987783cb6a?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "03",
      title: "The Brew",
      desc: "Precision brewing methods ensure perfect extraction. Whether it's espresso or pour-over, we honor the science of coffee.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop"
    },
    {
      number: "04",
      title: "The Recharge",
      desc: "Served in a warm, inviting space designed for connection. Take a sip, take a breath, and recharge your spirit.",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <Section className="bg-coffee-900 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />
      
      <div className="text-center mb-20 relative z-10">
        <motion.span 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-coffee-accent uppercase tracking-widest text-sm font-bold"
        >
          Our Process
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-serif text-coffee-50 mt-4"
        >
          From Bean to Cup
        </motion.h2>
      </div>

      <div className="relative z-10">
        {steps.map((step, index) => (
          <JourneyStep 
            key={index}
            {...step}
            isEven={index % 2 !== 0}
          />
        ))}
      </div>
    </Section>
  );
};

export default Journey;