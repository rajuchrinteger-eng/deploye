import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Coffee, ChevronDown } from 'lucide-react';
import { Steam } from './ui/Steam';

// --- Menu Card Data ---
interface MenuCardData {
  id: string;
  groupName: string; 
  imageUrl: string;
  title: string;
  subtitle: string;
}

const MENU_CARDS: MenuCardData[] = [
  {
    id: "juices",
    groupName: "Juices & Shakes",
    title: "Fresh Juices & Shakes",
    subtitle: "Recharge with nature's best",
    imageUrl: "https://images.unsplash.com/photo-1544145945-f904253db0ad?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: "fried",
    groupName: "Fried & Momos",
    title: "Fried Fare & Momos",
    subtitle: "Crispy perfection in every bite",
    imageUrl: "https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: "noodles",
    groupName: "Noodles & Buns",
    title: "Noodles & Bun Varieties",
    subtitle: "Hearty meals for any time",
    imageUrl: "https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: "sandwiches",
    groupName: "Sandwiches",
    title: "Gourmet Sandwiches",
    subtitle: "Crafted between fresh bread",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: "chai",
    groupName: "Chai & Eggs",
    title: "Chai & Eggslusive",
    subtitle: "Traditional favorites redefined",
    imageUrl: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=1200&auto=format&fit=crop" 
  },
  {
    id: "coffee",
    groupName: "Signature Coffee",
    title: "Hot & Cold Coffee",
    subtitle: "The ultimate CnR recharge",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" 
  }
];

// --- Sub-components ---

const MenuCard: React.FC<{ 
  card: MenuCardData; 
  index: number;
}> = ({ card, index }) => {
  return (
    <motion.div
      id={`section-${card.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: (index % 2) * 0.1, duration: 0.8 }}
      className="group relative bg-[#0A0A0A] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/5 scroll-mt-32"
    >
      <div className="aspect-[3/4.2] overflow-hidden">
        <img 
          src={card.imageUrl} 
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
        />
      </div>
    </motion.div>
  );
};

const MenuPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(MENU_CARDS[0].id);
  const { scrollY } = useScroll();
  
  // Header visibility threshold
  const navOpacity = useTransform(scrollY, [window.innerHeight * 0.7, window.innerHeight * 0.85], [0, 1]);
  const navY = useTransform(scrollY, [window.innerHeight * 0.7, window.innerHeight * 0.85], [-20, 0]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`section-${id}`);
    if (el) {
      const offset = 140; // Space for sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('section-', ''));
          }
        });
      },
      { threshold: 0.2, rootMargin: '-30% 0px -40% 0px' }
    );
    MENU_CARDS.forEach((card) => {
      const el = document.getElementById(`section-${card.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen relative overflow-x-hidden selection:bg-coffee-accent selection:text-coffee-950">
      
      {/* 1. Hero Section */}
      <section className="relative h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20" 
            alt="Menu Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <Steam className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-coffee-accent animate-pulse" />
            <span className="text-[10px] text-white uppercase tracking-[0.5em] font-black">Digital Menu Gallery</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[9.5rem] font-serif font-bold text-white leading-none mb-10 tracking-tighter"
          >
            The Menu
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-coffee-100 mb-14 font-light max-w-2xl mx-auto italic opacity-60 leading-relaxed"
          >
            A curated selection of the finest brews and bites. Explore our collection page by page.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
             <button 
               onClick={() => scrollToSection(MENU_CARDS[0].id)} 
               className="group flex flex-col items-center gap-4 mx-auto text-coffee-accent"
             >
               <span className="text-[11px] uppercase tracking-[0.6em] font-bold">Discover</span>
               <div className="w-10 h-10 rounded-full border border-coffee-accent/30 flex items-center justify-center animate-bounce group-hover:bg-coffee-accent group-hover:text-coffee-950 transition-all">
                 <ChevronDown size={18} />
               </div>
             </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Horizontal Sticky Category Navigation */}
      <motion.nav 
        style={{ opacity: navOpacity, y: navY }}
        className="sticky top-[68px] z-50 bg-[#050505]/95 backdrop-blur-xl border-y border-white/5 py-4 overflow-x-auto no-scrollbar"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 md:gap-12 px-6 min-w-max">
          {MENU_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => scrollToSection(card.id)}
              className="group relative py-2"
            >
              <span className={`text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black transition-all duration-500 ${
                activeId === card.id ? 'text-coffee-accent' : 'text-white/30 hover:text-white/70'
              }`}>
                {card.groupName}
              </span>
              {activeId === card.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-coffee-accent shadow-[0_0_10px_rgba(212,165,116,0.6)]"
                />
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      {/* 3. Main Content: Grid of Plain Images */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {MENU_CARDS.map((card, idx) => (
            <MenuCard 
              key={card.id} 
              card={card} 
              index={idx}
            />
          ))}
        </div>
      </main>

    </div>
  );
};

export default MenuPage;