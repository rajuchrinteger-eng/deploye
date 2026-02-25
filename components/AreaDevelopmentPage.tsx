
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Users, MapPin, TrendingUp, Shield, Briefcase, ChevronRight, Target, X } from 'lucide-react';
import Section from './ui/Section';
import Button from './ui/Button';

const AreaInquiryModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
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
            <h3 className="text-2xl font-serif font-bold text-coffee-50 mb-2">Territory Application</h3>
            <p className="text-coffee-300 text-sm mb-6">Apply to become a Professional Franchise Consultant.</p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Full Name</label>
                <input type="text" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="Enter your name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div>
                    <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Phone Number</label>
                    <input type="tel" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="+91..." />
                 </div>
                 <div>
                    <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Target City</label>
                    <input type="text" className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="e.g. Chennai" />
                 </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Current Profession</label>
                <select className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none">
                  <option value="">Select Profession</option>
                  <option value="real-estate">Real Estate Consultant</option>
                  <option value="franchise">Franchise Consultant</option>
                  <option value="financial">Financial Distributor</option>
                  <option value="sales">Sales Manager</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-coffee-400 uppercase tracking-widest mb-1">Message (Optional)</label>
                <textarea rows={3} className="w-full bg-coffee-950 border border-coffee-800 rounded-lg p-3 text-coffee-100 focus:border-coffee-accent focus:outline-none" placeholder="Tell us about your network..."></textarea>
              </div>
              
              <Button className="w-full justify-center mt-2">Submit Application</Button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const AreaDevelopmentPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const idealFor = [
    "Real estate consultants",
    "Retail property brokers",
    "Franchise consultants",
    "Insurance advisors",
    "Financial distributors",
    "Former sales managers",
    "Business opportunity seekers"
  ];

  const steps = [
    {
      title: "Identify",
      description: "You identify serious investors in your zone looking for business opportunities."
    },
    {
      title: "Connect",
      description: "You connect them with our expert team for detailed presentations."
    },
    {
      title: "Facilitate",
      description: "We handle the brand setup, operations, and supply chain management."
    },
    {
      title: "Earn",
      description: "You earn ₹45,000 per successful franchise closure in your territory."
    }
  ];

  const incomePotential = [
    { closures: 2, income: "₹90,000" },
    { closures: 4, income: "₹1,80,000" },
    { closures: 6, income: "₹2,70,000" }
  ];

  const supportIncludes = [
    "Comprehensive Training",
    "Proven Sales Script & System",
    "Professional Marketing Kit",
    "Brand Presentation Deck",
    "Execution & Backend Support"
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Section 1: Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950 via-coffee-950/90 to-coffee-950" />
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
            alt="Professional Office" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-coffee-accent/30 bg-coffee-accent/10 text-coffee-accent text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Territory Partnership
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-[1.1]">
              Become a Professional <br/>
              <span className="text-coffee-accent italic">Franchise Consultant</span>
            </h1>
            <p className="text-xl md:text-2xl text-coffee-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
              Build your territory. Close franchise deals. <br className="hidden md:block" />
              Earn <span className="text-white font-bold">₹45,000</span> per successful onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="px-10" onClick={openModal}>Apply for Territory</Button>
              <Button variant="outline" size="lg" className="px-10" onClick={openModal}>Check Availability</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Who Is This For? */}
      <Section className="bg-coffee-900/30">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Who Is This For?</h2>
            <p className="text-coffee-300 mb-12 text-lg">
              If you already work with investors, retail spaces or business owners — this model fits naturally into your network.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-coffee-950/50 border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-coffee-accent" />
                  <span className="text-coffee-100 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 rounded-2xl bg-coffee-accent/5 border border-coffee-accent/20">
              <p className="text-coffee-200 italic">
                <span className="text-coffee-accent font-bold">Target Age Group:</span> 28–50 years
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Professional Meeting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent" />
          </motion.div>
        </div>
      </Section>

      {/* Section 3: What Is an Area Developer? */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">What Is an Area Developer?</h2>
            <p className="text-coffee-300 text-lg">Coffee N Recharge is appointing strategic partners to expand our footprint.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              {[
                "One-time onboarding: ₹2 Lakhs",
                "Earn approx. ₹45,000 per franchise closure",
                "No café operations required",
                "We provide brand, training & sales system",
                "You build recurring territory income"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-coffee-accent/20 p-1 rounded-full">
                    <CheckCircle2 className="text-coffee-accent" size={20} />
                  </div>
                  <span className="text-coffee-100 text-lg">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-coffee-900/50 border border-coffee-accent/20 p-8 rounded-3xl flex flex-col justify-center items-center text-center">
              <Shield className="text-coffee-accent mb-6" size={48} />
              <h3 className="text-2xl font-bold text-white mb-4">Professional Model</h3>
              <p className="text-coffee-300 leading-relaxed">
                This is <span className="text-white font-bold uppercase">NOT</span> a job. <br/>
                This is a territory-based business model designed for high-performing consultants.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 4: How It Works */}
      <Section className="bg-coffee-950">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">How It Works</h2>
          <p className="text-coffee-300 text-lg">Four simple steps to building your network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-coffee-900/30 border border-white/5 hover:border-coffee-accent/30 transition-all group"
            >
              <div className="text-6xl font-serif font-black text-coffee-800/30 absolute top-4 right-6 group-hover:text-coffee-accent/20 transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
              <p className="text-coffee-400 text-sm leading-relaxed relative z-10">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-serif italic text-coffee-200">
            "You don’t run cafés. <span className="text-coffee-accent font-bold">You build the network.</span>"
          </p>
        </div>
      </Section>

      {/* Section 5: Income Potential */}
      <Section className="bg-gradient-to-b from-coffee-950 to-coffee-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8">Income Potential</h2>
              <p className="text-coffee-300 mb-10 text-lg leading-relaxed">
                Be realistic. We value performance. Serious performers can build <span className="text-white font-bold">₹2–₹2.5L per month</span> through structured closures.
              </p>
              <div className="space-y-4">
                {incomePotential.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 rounded-2xl bg-coffee-950 border border-white/5">
                    <span className="text-coffee-200 font-medium">{item.closures} Franchises Closed</span>
                    <span className="text-2xl font-serif font-bold text-coffee-accent">{item.income}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80" alt="Consulting" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" alt="Meeting" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" alt="Success" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80" alt="Team" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 6: Territory Advantage */}
      <Section className="bg-coffee-950">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="text-coffee-accent mx-auto mb-8" size={64} />
          <h2 className="text-4xl font-serif font-bold text-white mb-8">Territory Advantage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-coffee-900/20 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Exclusive</h3>
              <p className="text-coffee-400 text-sm">Micro-market allocation</p>
            </div>
            <div className="p-8 rounded-3xl bg-coffee-900/20 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Protected</h3>
              <p className="text-coffee-400 text-sm">No duplication once assigned</p>
            </div>
            <div className="p-8 rounded-3xl bg-coffee-900/20 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-2">Limited</h3>
              <p className="text-coffee-400 text-sm">Few territories available</p>
            </div>
          </div>
          <p className="text-2xl font-serif text-coffee-100">
            "Once allotted, <span className="text-coffee-accent font-bold">your zone is protected.</span>"
          </p>
        </div>
      </Section>

      {/* Section 7: Investment & Support */}
      <Section className="bg-coffee-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-serif font-bold text-white mb-8">Investment & Support</h2>
              <div className="p-10 rounded-3xl bg-coffee-950 border-2 border-coffee-accent/30 mb-8">
                <span className="text-coffee-500 text-xs font-black uppercase tracking-widest mb-2 block">One-time Fee</span>
                <div className="text-5xl font-serif font-bold text-white mb-4">₹2 Lakhs</div>
                <p className="text-coffee-400">Territory allocation & onboarding</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <Briefcase className="text-coffee-accent" />
                What's Included:
              </h3>
              <div className="space-y-4">
                {supportIncludes.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-5 rounded-2xl bg-coffee-950/50 border border-white/5">
                    <CheckCircle2 className="text-coffee-accent" size={20} />
                    <span className="text-coffee-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 8: City-Specific Section */}
      <Section>
        <div className="max-w-5xl mx-auto p-12 rounded-[3rem] bg-gradient-to-br from-coffee-900 to-coffee-950 border border-coffee-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <MapPin size={200} className="text-coffee-accent" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-serif font-bold text-white mb-8">Area Developers Required in Chennai</h2>
            <p className="text-coffee-200 text-xl mb-12 max-w-2xl">
              We are currently appointing Area Developers for the Chennai region. Secure your micro-market today.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <span className="text-coffee-500 text-[10px] font-black uppercase tracking-widest">You Earn</span>
                <p className="text-3xl font-serif font-bold text-white">Up to ₹45,000 <span className="text-lg font-sans font-normal text-coffee-400">per closure</span></p>
              </div>
              <div className="space-y-2">
                <span className="text-coffee-500 text-[10px] font-black uppercase tracking-widest">Entry</span>
                <p className="text-3xl font-serif font-bold text-white">₹2 Lakhs <span className="text-lg font-sans font-normal text-coffee-400">onboarding</span></p>
              </div>
            </div>
            
            <Button size="lg" className="px-12" onClick={openModal}>Apply for Chennai Territory</Button>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 opacity-50">
              <span className="text-xs font-bold uppercase tracking-widest text-coffee-400">Next: Bangalore</span>
              <span className="text-xs font-bold uppercase tracking-widest text-coffee-400">Next: Hyderabad</span>
              <span className="text-xs font-bold uppercase tracking-widest text-coffee-400">Next: Mumbai</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 9: Final CTA */}
      <section className="py-32 px-6 bg-coffee-accent text-coffee-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Consult. Connect. Earn.</h2>
            <p className="text-xl md:text-2xl font-light mb-12 opacity-90">
              Turn retail spaces and investor contacts into profitable café businesses — and earn per closure.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="px-12 py-6 bg-coffee-950 text-white rounded-full font-black text-sm uppercase tracking-[0.3em] shadow-2xl hover:bg-white hover:text-coffee-950 transition-all"
            >
              Reserve My Territory Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <AreaInquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default AreaDevelopmentPage;
