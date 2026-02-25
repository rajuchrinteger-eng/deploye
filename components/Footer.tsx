
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Phone, Mail, Instagram, Globe, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (view: any, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (view: any, sectionId?: string) => {
    if (onNavigate) {
      onNavigate(view, sectionId);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0705] pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 p-1 bg-coffee-950/40 shadow-2xl">
            <img src="https://i.ibb.co/vzB7pLq/logo.png" alt="CnR Logo" className="w-full h-full object-cover" />
          </div>
          <h2 className="mt-8 text-[11px] font-black uppercase tracking-[0.8em] text-coffee-500">Coffee n Recharge Elite</h2>
        </motion.div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-24">
          
          <div className="space-y-6">
            <h3 className="text-coffee-accent font-black uppercase tracking-widest text-[10px]">Corporate Office</h3>
            <p className="text-coffee-100 text-sm leading-relaxed font-light">
              2, 8B, VOC Colony, 2nd Main Rd,<br/>
              Kodambakkam, Chennai - 024
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-coffee-accent font-black uppercase tracking-widest text-[10px]">Business Hotlines</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+919884766523" className="block text-white text-lg font-bold hover:text-coffee-accent transition-colors">+91 98847 66523</a>
              <a href="tel:+919884096523" className="block text-white text-lg font-bold hover:text-coffee-accent transition-colors">+91 98840 96523</a>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-coffee-accent font-black uppercase tracking-widest text-[10px]">Official Mail</h3>
            <a href="mailto:miniholdingsadmin@gmail.com" className="block text-coffee-100 text-sm hover:text-coffee-accent transition-colors break-all">miniholdingsadmin@gmail.com</a>
          </div>

          <div className="space-y-6">
            <h3 className="text-coffee-accent font-black uppercase tracking-widest text-[10px]">Digital</h3>
            <div className="flex gap-6">
              <a href="https://instagram.com/coffeenrecharge" className="text-coffee-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="https://www.miniholdings.in" className="text-coffee-400 hover:text-white transition-colors"><Globe size={20} /></a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-coffee-700 text-[10px] font-bold tracking-[0.4em] uppercase">
            &copy; {currentYear} Mini Holdings / Coffee n Recharge Elite
          </p>
          
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex items-center gap-4 text-coffee-600 hover:text-coffee-accent transition-colors"
          >
            <span className="text-[10px] uppercase font-black tracking-[0.6em]">Back to top</span>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
              <ArrowUp size={16} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
