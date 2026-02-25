
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, CheckCircle2, Coffee, Send } from 'lucide-react';
import Button from './ui/Button';
import Section from './ui/Section';
import { Steam } from './ui/Steam';

const ContactInfoCard: React.FC<{ icon: React.ElementType; title: string; content: React.ReactNode; link?: string; delay: number }> = ({ icon: Icon, title, content, link, delay }) => {
  const CardContent = (
    <div className="flex items-start gap-4 h-full">
      <div className="w-12 h-12 rounded-full bg-coffee-900 border border-coffee-800 flex items-center justify-center shrink-0 group-hover:bg-coffee-accent group-hover:text-coffee-950 transition-colors duration-300">
        <Icon size={20} className="text-coffee-accent group-hover:text-coffee-950" />
      </div>
      <div>
        <h3 className="text-coffee-400 text-sm font-bold uppercase tracking-widest mb-2">{title}</h3>
        <div className="text-coffee-50 font-medium leading-relaxed group-hover:text-coffee-100 transition-colors">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-coffee-950/50 p-6 rounded-2xl border border-white/5 hover:border-coffee-accent/30 hover:bg-coffee-900/50 transition-all duration-300 group"
    >
      {link ? (
        <a href={link} target={link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="block h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    purpose: 'Franchise Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', phone: '', email: '', city: '', purpose: 'Franchise Enquiry', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-coffee-950 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-coffee-950 to-coffee-900">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <Steam className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-block relative"
          >
            <div className="absolute inset-0 bg-coffee-accent blur-3xl opacity-20 animate-pulse"></div>
            <Coffee className="w-20 h-20 text-coffee-accent relative z-10 mx-auto" strokeWidth={1.5} />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif font-bold text-coffee-50 mb-6 leading-tight"
          >
            Partner With <br/> The Elite
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-coffee-200 font-light max-w-2xl mx-auto"
          >
            Join India's most innovative 'Coffee + Service' network. Our corporate team at Mini Holdings is ready to assist you.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION */}
      <Section className="bg-coffee-950 border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactInfoCard 
            delay={0.1}
            icon={Phone}
            title="Business Hotlines"
            content={
              <div className="flex flex-col">
                <span>+91 98847 66523</span>
                <span>+91 98840 96523</span>
              </div>
            }
            link="tel:+919884766523"
          />
          <ContactInfoCard 
            delay={0.2}
            icon={Mail}
            title="Support Mail"
            content="miniholdingsadmin@gmail.com"
            link="mailto:miniholdingsadmin@gmail.com"
          />
          <ContactInfoCard 
            delay={0.3}
            icon={MapPin}
            title="Corporate HQ"
            content={
              <span>
                2, 8B, VOC Colony, 2nd Main Rd,<br/>
                Kodambakkam, Chennai - 024
              </span>
            }
          />
          <ContactInfoCard 
            delay={0.4}
            icon={Globe}
            title="Official Portals"
            content={
              <div className="flex flex-col">
                <span>miniholdings.in</span>
                <span>coffeenrecharge.com</span>
              </div>
            }
            link="https://www.miniholdings.in"
          />
        </div>
      </Section>

      {/* 3. FORM SECTION */}
      <Section className="bg-coffee-950 relative py-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-coffee-900 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="text-center mb-12">
              <span className="text-coffee-accent font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">CONNECT</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">Send An Enquiry</h2>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center"
              >
                <div className="w-20 h-20 bg-coffee-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-coffee-accent" />
                </div>
                <h3 className="text-2xl font-serif text-coffee-50 mb-2 font-bold">Inquiry Received</h3>
                <p className="text-coffee-300 font-light">The Elite support team from Mini Holdings will reach out within 48 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-10 text-coffee-accent hover:text-white text-[10px] font-black uppercase tracking-widest underline underline-offset-[12px] decoration-coffee-800 hover:decoration-coffee-accent transition-all"
                >
                  New Enquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-coffee-500 ml-4">Full Name</label>
                    <input type="text" name="name" required value={formState.name} onChange={handleChange} className="w-full bg-coffee-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-coffee-accent/50 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-coffee-500 ml-4">Phone Number</label>
                    <input type="tel" name="phone" required value={formState.phone} onChange={handleChange} className="w-full bg-coffee-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-coffee-accent/50 transition-all" placeholder="+91 ..." />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-coffee-500 ml-4">Purpose</label>
                  <select name="purpose" value={formState.purpose} onChange={handleChange} className="w-full bg-coffee-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-coffee-accent/50 transition-all appearance-none cursor-pointer">
                    <option value="Franchise Enquiry">Franchise Enquiry (CNR Elite)</option>
                    <option value="Ingredient Supply">Ingredient Supply</option>
                    <option value="Collaborative Service">Collaborative Service</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-coffee-500 ml-4">Message</label>
                  <textarea name="message" required value={formState.message} onChange={handleChange} rows={5} className="w-full bg-coffee-950/50 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-coffee-accent/50 transition-all resize-none" placeholder="Tell us more about your interest..."></textarea>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full justify-center !py-6 !text-xs font-black tracking-[0.4em] uppercase">
                  {isSubmitting ? "Processing..." : <span className="flex items-center gap-3">Submit Inquiry <Send size={16} /></span>}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
