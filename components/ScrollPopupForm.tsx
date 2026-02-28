
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, ArrowRight, CheckCircle2, Coffee } from 'lucide-react';
import Button from './ui/Button';

const ScrollPopupForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasBeenShown) return;

      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Trigger when footer is 500px from entering the viewport
        if (rect.top <= windowHeight + 500) {
          setIsVisible(true);
          setHasBeenShown(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasBeenShown]);

  const handleNext = () => {
    if (formData.name && formData.phone && formData.email) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you'd send this to your backend
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="bg-coffee-950 w-full max-w-5xl rounded-[3rem] border border-coffee-accent/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row min-h-[600px]"
          >
            {/* Left Side: Immersive Image/Brand */}
            <div className="md:w-5/12 relative overflow-hidden hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80" 
                alt="Coffee Experience" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="w-12 h-12 rounded-2xl bg-coffee-accent flex items-center justify-center text-coffee-950 mb-6">
                  <Coffee size={24} />
                </div>
                <h2 className="text-4xl font-serif font-bold text-white mb-4 leading-tight">
                  The Elite <br/>
                  <span className="text-coffee-accent italic">Experience</span>
                </h2>
                <p className="text-coffee-200 text-sm font-light leading-relaxed">
                  Join our network of premium coffee destinations. Schedule a one-on-one consultation with our expansion team.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-8 md:p-16 relative flex flex-col justify-center">
              <button 
                onClick={closePopup}
                className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-coffee-accent hover:text-coffee-950 rounded-full text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-10">
                    <span className="text-coffee-accent text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
                      Consultation Request
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Let's Connect</h3>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1 h-[2px] bg-coffee-800">
                        <motion.div 
                          className="h-full bg-coffee-accent"
                          initial={{ width: "0%" }}
                          animate={{ width: step === 1 ? "50%" : "100%" }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-coffee-500 uppercase tracking-widest">Step {step}/2</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {step === 1 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. John Doe"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Phone Number</label>
                          <div className="relative">
                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <input 
                              type="tel" 
                              required
                              placeholder="+91 00000 00000"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Email Address</label>
                          <div className="relative">
                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <input 
                              type="email" 
                              required
                              placeholder="john@example.com"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                        <Button 
                          type="button"
                          className="w-full justify-center py-6 rounded-2xl mt-6 !text-xs font-black tracking-[0.2em]"
                          onClick={handleNext}
                        >
                          Continue to Schedule <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Preferred Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <input 
                              type="date" 
                              required
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all"
                              value={formData.date}
                              onChange={(e) => setFormData({...formData, date: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Preferred Time Slot</label>
                          <div className="relative">
                            <Clock className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <select 
                              required
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all appearance-none"
                              value={formData.time}
                              onChange={(e) => setFormData({...formData, time: e.target.value})}
                            >
                              <option value="" className="bg-coffee-950">Select Preferred Time</option>
                              <option value="10:00 AM" className="bg-coffee-950">10:00 AM - 11:00 AM</option>
                              <option value="11:00 AM" className="bg-coffee-950">11:00 AM - 12:00 PM</option>
                              <option value="02:00 PM" className="bg-coffee-950">02:00 PM - 03:00 PM</option>
                              <option value="03:00 PM" className="bg-coffee-950">03:00 PM - 04:00 PM</option>
                              <option value="04:00 PM" className="bg-coffee-950">04:00 PM - 05:00 PM</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                          <Button 
                            type="button"
                            variant="outline"
                            className="flex-1 justify-center py-6 rounded-2xl !text-xs font-black tracking-[0.2em]"
                            onClick={() => setStep(1)}
                          >
                            Back
                          </Button>
                          <Button 
                            type="submit"
                            className="flex-[2] justify-center py-6 rounded-2xl !text-xs font-black tracking-[0.2em]"
                          >
                            Schedule Meeting
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </form>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 max-w-sm mx-auto"
                >
                  <div className="w-24 h-24 rounded-full bg-coffee-accent/10 flex items-center justify-center text-coffee-accent mx-auto mb-8 border border-coffee-accent/20">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white mb-4">Meeting Scheduled!</h3>
                  <p className="text-coffee-300 leading-relaxed">
                    Thank you, <span className="text-white font-bold">{formData.name.split(' ')[0]}</span>. Our expansion team has received your request and will contact you shortly to confirm the details.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollPopupForm;
