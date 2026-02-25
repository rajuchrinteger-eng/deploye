
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Coffee } from 'lucide-react';

interface NavbarProps {
  currentView?: string;
  onNavigate?: (view: any, sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView = 'home', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const menuItems = [
    { id: 'why-cnr', label: 'Why CNR' },
    { id: 'about', label: 'About' },
    { id: 'franchise', label: 'Franchise' },
    { id: 'collaborations', label: 'Collaborative' },
    { id: 'services', label: 'Service' },
    { id: 'menu', label: 'Menus' },
    { id: 'supplies', label: 'Supplies' },
    { id: 'channel', label: 'Channel' },
    { id: 'area-development', label: 'Area Development' },
  ];

  const handleNavClick = (e: React.MouseEvent, view: string, sectionId?: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view, sectionId);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled || currentView !== 'home'
          ? 'bg-coffee-950/95 backdrop-blur-xl py-3 shadow-2xl border-b border-coffee-accent/10' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-3 font-serif"
        >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className="w-10 h-10 rounded-xl overflow-hidden border border-coffee-accent/40 bg-coffee-950 shadow-lg shadow-coffee-accent/20"
            >
              <img src="https://i.ibb.co/vzB7pLq/logo.png" alt="CnR Logo" className="w-full h-full object-cover" />
            </motion.div>
            <div className="flex flex-col">
              <span className="tracking-[0.2em] text-lg uppercase font-black text-coffee-50 leading-none">CnR</span>
              <span className="text-[7px] text-coffee-accent uppercase tracking-[0.4em] font-bold mt-1">Coffee n Recharge</span>
            </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-6 items-center">
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={(e) => handleNavClick(e, item.id as any)}
                className={`relative text-[9px] uppercase tracking-[0.3em] font-black transition-all duration-300 group ${
                  currentView === item.id ? 'text-coffee-accent' : 'text-coffee-200 hover:text-coffee-50'
                }`}
              >
                {item.label}
                <motion.span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-coffee-accent transition-all duration-300 ${
                    currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </button>
            ))}
          </div>

          <div className="h-4 w-[1px] bg-coffee-800 mx-2" />

          {/* New Two-Button PDF Layout */}
          <div className="flex gap-3 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-coffee-accent text-coffee-950 rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-coffee-accent/10 flex items-center gap-2 whitespace-nowrap"
            >
              <Download size={14} /> FRANCHISE PDF
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 border border-coffee-accent/40 text-coffee-accent rounded-full font-black text-[9px] uppercase tracking-[0.2em] hover:bg-coffee-accent hover:text-coffee-950 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <Download size={14} /> COMPANY PROFILE PDF
            </motion.button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-coffee-50 p-2 border border-white/10 rounded-lg">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] lg:hidden bg-coffee-950 flex flex-col pt-24 px-8 pb-12"
          >
            <div className="flex flex-col gap-6 text-left">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={(e) => handleNavClick(e, item.id as any)}
                  className={`text-2xl font-serif font-bold tracking-tight transition-colors ${
                    currentView === item.id ? 'text-coffee-accent' : 'text-coffee-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="mt-8 flex flex-col gap-4">
                <button className="w-full py-5 bg-coffee-accent text-coffee-950 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                  <Download size={18} /> DOWNLOAD FRANCHISE GUIDE
                </button>
                <button className="w-full py-5 border border-coffee-accent text-coffee-accent rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                  <Download size={18} /> COMPANY PROFILE PDF
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
