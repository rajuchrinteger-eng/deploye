
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Phone, Mail, ArrowRight, CheckCircle2, Coffee, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from './ui/Button';

interface CustomSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ label, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-white/[0.03] border ${isOpen ? 'border-coffee-accent' : 'border-white/10'} rounded-2xl py-4 px-6 text-left text-white flex justify-between items-center transition-all hover:bg-white/[0.05] focus:outline-none`}
        >
          <span className={value ? 'text-white' : 'text-coffee-800'}>
            {value || placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={18} className="text-coffee-600" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 top-full left-0 right-0 mt-2 bg-coffee-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl"
            >
              <div className="max-h-60 overflow-y-auto py-2">
                {options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`w-full px-6 py-3 text-left text-sm transition-colors hover:bg-coffee-accent hover:text-coffee-950 ${value === option ? 'text-coffee-accent bg-white/5' : 'text-coffee-200'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const CustomDatePicker: React.FC<{
  label: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ label, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(new Date());
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString('default', { month: 'long' });

  const days = [];
  const totalDays = daysInMonth(year, month);
  const startDay = firstDayOfMonth(year, month);

  for (let i = 0; i < startDay; i++) days.push(null);
  for (let i = 1; i <= totalDays; i++) days.push(i);

  const handleDateSelect = (day: number) => {
    const selectedDate = new Date(year, month, day);
    onChange(selectedDate.toISOString().split('T')[0]);
    setIsOpen(false);
  };

  const changeMonth = (offset: number) => {
    setViewDate(new Date(year, month + offset, 1));
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return 'Select Date';
    return new Date(dateStr).toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="space-y-2" ref={containerRef}>
      <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-white/[0.03] border ${isOpen ? 'border-coffee-accent' : 'border-white/10'} rounded-2xl py-4 px-6 text-left text-white flex justify-between items-center transition-all hover:bg-white/[0.05] focus:outline-none`}
        >
          <div className="flex items-center gap-3">
            <Calendar size={18} className="text-coffee-600" />
            <span className={value ? 'text-white' : 'text-coffee-800'}>
              {formatDate(value)}
            </span>
          </div>
          <ChevronDown size={18} className="text-coffee-600" />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute z-50 top-full left-0 right-0 mt-2 bg-coffee-950 border border-white/10 rounded-3xl p-6 shadow-2xl backdrop-blur-2xl w-[320px] md:w-full"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-serif font-bold">{monthName} {year}</h4>
                <div className="flex gap-2">
                  <button type="button" onClick={() => changeMonth(-1)} className="p-2 hover:bg-white/5 rounded-full text-coffee-400">
                    <ChevronLeft size={16} />
                  </button>
                  <button type="button" onClick={() => changeMonth(1)} className="p-2 hover:bg-white/5 rounded-full text-coffee-400">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                  <div key={d} className="text-center text-[10px] font-black text-coffee-600 uppercase py-2">{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {days.map((day, i) => (
                  <div key={i} className="aspect-square flex items-center justify-center">
                    {day && (
                      <button
                        type="button"
                        onClick={() => handleDateSelect(day)}
                        className={`w-full h-full rounded-xl text-xs transition-all flex items-center justify-center
                          ${value === new Date(year, month, day).toISOString().split('T')[0] 
                            ? 'bg-coffee-accent text-coffee-950 font-bold' 
                            : 'text-coffee-200 hover:bg-white/5'}`}
                      >
                        {day}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ScrollPopupForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    timeline: '',
    experience: '',
    funding: '',
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

  const handleStep2Next = () => {
    if (formData.budget && formData.timeline && formData.experience && formData.funding) {
      setStep(3);
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
            className="bg-coffee-950 w-full max-w-5xl rounded-[3rem] border border-coffee-accent/20 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden flex flex-col md:flex-row min-h-[650px]"
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
            <div className="flex-1 p-8 md:p-12 relative flex flex-col justify-center">
              <button 
                onClick={closePopup}
                className="absolute top-8 right-8 p-3 bg-white/5 hover:bg-coffee-accent hover:text-coffee-950 rounded-full text-white transition-all z-10"
              >
                <X size={20} />
              </button>

              {!isSubmitted ? (
                <div className="max-w-md mx-auto w-full">
                  <div className="mb-8">
                    <span className="text-coffee-accent text-[10px] font-black uppercase tracking-[0.4em] mb-3 block">
                      Consultation Request
                    </span>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Let's Connect</h3>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex-1 h-[2px] bg-coffee-800">
                        <motion.div 
                          className="h-full bg-coffee-accent"
                          initial={{ width: "0%" }}
                          animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-coffee-500 uppercase tracking-widest">Step {step}/3</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {step === 1 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-coffee-500 uppercase tracking-widest ml-1">Full Name</label>
                          <div className="relative">
                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-coffee-600" size={18} />
                            <input 
                              type="text" 
                              required
                              placeholder="e.g. John Doe"
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
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
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
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
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white focus:border-coffee-accent focus:bg-white/[0.05] focus:outline-none transition-all placeholder:text-coffee-800"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                        <Button 
                          type="button"
                          className="w-full justify-center py-5 rounded-2xl mt-4 !text-xs font-black tracking-[0.2em]"
                          onClick={handleNext}
                        >
                          Continue <ArrowRight size={18} className="ml-2" />
                        </Button>
                      </motion.div>
                    ) : step === 2 ? (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-4"
                      >
                        <CustomSelect 
                          label="Investment Budget"
                          placeholder="Select Budget Range"
                          options={["Upto 6 Lakhs", "6 to 10 Lakhs", "10 to 20 Lakhs"]}
                          value={formData.budget}
                          onChange={(val) => setFormData({...formData, budget: val})}
                        />
                        
                        <CustomSelect 
                          label="Start Timeline"
                          placeholder="When are you looking to start?"
                          options={["Immediately", "Within 3 to 6 months", "After 6 months"]}
                          value={formData.timeline}
                          onChange={(val) => setFormData({...formData, timeline: val})}
                        />

                        <CustomSelect 
                          label="Business Experience"
                          placeholder="Previous Experience?"
                          options={[
                            "Yes, in the food and beverage industry",
                            "Yes, in another industry",
                            "No, this is my first time"
                          ]}
                          value={formData.experience}
                          onChange={(val) => setFormData({...formData, experience: val})}
                        />

                        <CustomSelect 
                          label="Source of Fund"
                          placeholder="Select Funding Source"
                          options={["Bank loan", "Self funded"]}
                          value={formData.funding}
                          onChange={(val) => setFormData({...formData, funding: val})}
                        />

                        <div className="flex gap-4 mt-6">
                          <Button 
                            type="button"
                            variant="outline"
                            className="flex-1 justify-center py-5 rounded-2xl !text-xs font-black tracking-[0.2em]"
                            onClick={() => setStep(1)}
                          >
                            Back
                          </Button>
                          <Button 
                            type="button"
                            className="flex-[2] justify-center py-5 rounded-2xl !text-xs font-black tracking-[0.2em]"
                            onClick={handleStep2Next}
                          >
                            Continue
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-5"
                      >
                        <CustomDatePicker 
                          label="Preferred Date"
                          value={formData.date}
                          onChange={(val) => setFormData({...formData, date: val})}
                        />
                        <CustomSelect 
                          label="Preferred Time Slot"
                          placeholder="Select Preferred Time"
                          options={[
                            "10:00 AM - 11:00 AM",
                            "11:00 AM - 12:00 PM",
                            "02:00 PM - 03:00 PM",
                            "03:00 PM - 04:00 PM",
                            "04:00 PM - 05:00 PM"
                          ]}
                          value={formData.time}
                          onChange={(val) => setFormData({...formData, time: val})}
                        />
                        <div className="flex gap-4 mt-8">
                          <Button 
                            type="button"
                            variant="outline"
                            className="flex-1 justify-center py-6 rounded-2xl !text-xs font-black tracking-[0.2em]"
                            onClick={() => setStep(2)}
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
