
import { MenuItem, Testimonial, FranchiseStat, Location, ComboItem, SupplyItem, CollaborativeService, SupplyCategory } from './types';

export const WHY_CNR_DATA = [
  {
    title: "Café + Recharge Ecosystem",
    desc: "A unique blend of workspace and refreshment zone that drives multi-hour stays.",
    icon: "Zap"
  },
  {
    title: "High-Frequency Repeat Model",
    desc: "Our pricing and ambiance strategy ensures customers return 3-4 times a week.",
    icon: "RefreshCw"
  },
  {
    title: "Low CAPEX, High Yield",
    desc: "Optimized kitchen footprints and smart supply chains for faster ROI.",
    icon: "TrendingUp"
  },
  {
    title: "160+ Thriving Locations",
    desc: "A battle-tested business model proven successful across diverse demographics.",
    icon: "Map"
  },
  {
    title: "R&D Driven Innovation",
    desc: "Our dedicated labs ensure the menu evolves monthly with global beverage trends.",
    icon: "FlaskConical"
  },
  {
    title: "Tech-Enabled Operations",
    desc: "Full stack POS and inventory automation for seamless multi-unit management.",
    icon: "Cpu"
  },
  {
    title: "Supply Chain Mastery",
    desc: "Direct-from-estate sourcing ensures 100% consistency and higher margins.",
    icon: "Truck"
  },
  {
    title: "Comprehensive Training",
    desc: "End-to-end staff certification programs to maintain the CnR gold standard.",
    icon: "GraduationCap"
  }
];

export const COLLABORATIVE_SERVICES: CollaborativeService[] = [
  {
    id: 1,
    group: 'Strategic',
    title: "Food Brand Collabs",
    description: "Partner with local snack brands and bakeries for curated Coffee + Snack combos.",
    icon: "Utensils",
    benefit: "Shared Revenue & Higher AOV"
  },
  {
    id: 2,
    group: 'Institutional',
    title: "Corporate Tie-ups",
    description: "In-house beverage setups for corporate offices with high-frequency consumption.",
    icon: "Monitor",
    benefit: "Recurring Revenue"
  },
  {
    id: 3,
    group: 'Institutional',
    title: "Hospital Centers",
    description: "Hygienic, affordable tea/coffee for staff and visitors in medical campuses.",
    icon: "HeartPulse",
    benefit: "Reliable Recurring Demand"
  },
  {
    id: 4,
    group: 'Strategic',
    title: "Retail Product Sales",
    description: "Branded powder, sachets, and home-brew packs sold directly at checkout.",
    icon: "ShoppingBag",
    benefit: "Retail Market Expansion"
  },
  {
    id: 5,
    group: 'Lifestyle',
    title: "Gym Partnerships",
    description: "Quick refreshing beverages tailored for workout routines and trainers.",
    icon: "Dumbbell",
    benefit: "Subscription-Based Revenue"
  },
  {
    id: 6,
    group: 'Strategic',
    title: "Events & Pop-ups",
    description: "Mobile coffee counters for exhibitions, festivals, and bulk orders.",
    icon: "Calendar",
    benefit: "High-Volume Sales"
  },
  {
    id: 7,
    group: 'Institutional',
    title: "Educational Hubs",
    description: "Supply to colleges and training centers with student-friendly pricing.",
    icon: "GraduationCap",
    benefit: "Daily Consistent Demand"
  },
  {
    id: 8,
    group: 'Digital',
    title: "Digital Subscriptions",
    description: "Prepaid coffee plans and digital recharge cards for user lock-in.",
    icon: "CreditCard",
    benefit: "Customer Retention"
  },
  {
    id: 9,
    group: 'Digital',
    title: "Influencer Meets",
    description: "Partnering with creators to host meetups and organic marketing events.",
    icon: "Users",
    benefit: "Organic Brand Visibility"
  },
  {
    id: 10,
    group: 'Lifestyle',
    title: "Car Showrooms",
    description: "Elevating the waiting experience for luxury car buyers and service staff.",
    icon: "Car",
    benefit: "Premium Brand Association"
  },
  {
    id: 11,
    group: 'Lifestyle',
    title: "Car Spas",
    description: "Fresh tea and coffee served while vehicles undergo maintenance.",
    icon: "Sparkles",
    benefit: "Steady Footfall"
  },
  {
    id: 12,
    group: 'Digital',
    title: "Social Media Studios",
    description: "Supplying production houses and YouTube offices during shoots.",
    icon: "Clapperboard",
    benefit: "Content Integration"
  },
  {
    id: 13,
    group: 'Institutional',
    title: "Co-Working Spaces",
    description: "Convenient hot beverage services for professionals and freelancers.",
    icon: "Building2",
    benefit: "High Repeat Frequency"
  },
  {
    id: 14,
    group: 'Lifestyle',
    title: "Residential Complexes",
    description: "Morning kiosks and evening refreshment support for apartments.",
    icon: "Home",
    benefit: "Neighborhood Loyalty"
  }
];

export const SUPPLIES_CATALOG: SupplyCategory[] = [
  {
    id: "beverage-raw",
    name: "Beverage Raw Materials",
    description: "Premium foundations for every signature CnR drink.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
    items: [
      { group: "Tea & Coffee", list: ["Tea Powder (Regular/Premium)", "Filter Coffee Powder", "Instant Coffee Powder", "Coffee Decoction Mix"] },
      { group: "Milk & Dairy", list: ["Fresh Milk", "Toned Milk", "Dairy Cream", "Butter Portions"] },
      { group: "Sweeteners", list: ["White/Brown Sugar", "Jaggery Powder", "Sugar Sachets", "Coconut Sugar"] },
      { group: "Soda & Water", list: ["Mineral Water Bottles", "Sparkling Soda", "Drinking Water Cans"] }
    ]
  },
  {
    id: "flavoring",
    name: "Flavouring & Add-ons",
    description: "The aromatic secret behind our diverse menu.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1589135339645-364230139b4b?q=80&w=800&auto=format&fit=crop",
    items: [
      { group: "Spices", list: ["Fresh Ginger", "Cardamom Powder", "Elaichi Essence"] },
      { group: "Syrups & Bases", list: ["Chocolate Syrup", "Caramel Syrup", "Vanilla Essence", "Cocoa Powder"] }
    ]
  },
  {
    id: "packaging",
    name: "Cups & Packaging",
    description: "Standardized branding for global consistency.",
    icon: "Package",
    image: "https://images.unsplash.com/photo-1541658016709-8273f5859d12?q=80&w=800&auto=format&fit=crop",
    items: [
      { group: "Hot Beverage", list: ["Paper Cups (S/M/L)", "Cup Lids & Sleeves", "Wooden Stirrer Sticks"] },
      { group: "Delivery Essentials", list: ["Takeaway Bags", "Custom Napkins", "Branded Tissues", "Logo Stickers"] }
    ]
  },
  {
    id: "kitchen-utility",
    name: "Kitchen & Operations",
    description: "Industrial grade tools for consistent output.",
    icon: "Wrench",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop",
    items: [
      { group: "Preparation", list: ["Tea Strainers & Coffee Filters", "Measuring Spoons", "Milk Boilers", "Airtight Storage Containers"] },
      { group: "Hygiene", list: ["Dishwash Liquid", "Floor Cleaner", "Hand Wash & Sanitizer", "Garbage Management"] },
      { group: "Utility", list: ["LPG Connectivity", "Lighters/Matches", "Power Backup Kits", "Precision Weighing Scales"] }
    ]
  }
];

export const SUPPLIES_DATA: SupplyItem[] = [
  {
    id: 1,
    name: "Signature Espresso Powder",
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop",
    description: "Premium Arabica & Robusta blend for consistent flavor profile."
  },
  {
    id: 2,
    name: "Artisanal Tea Leaves",
    category: "Tea",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop",
    description: "Selected hand-picked leaves from across the finest estates."
  },
  {
    id: 3,
    name: "Craft Beverage Bases",
    category: "Consumables",
    image: "https://images.unsplash.com/photo-1541658016709-8273f5859d12?q=80&w=800&auto=format&fit=crop",
    description: "Standardized syrups and bases for uniform taste globally."
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Signature Cappuccino",
    description: "Rich espresso topped with velvety steamed milk foam.",
    longDescription: "Our signature blend espresso, carefully extracted and topped with micro-foam steamed milk.",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop",
    category: 'coffee',
    tags: ["Bestseller", "Hot"],
    badges: ["Hot", "Regular"],
    isBestseller: true,
    addons: ["Extra Shot"],
    calories: "120 kcal",
    allergens: ["Milk"]
  },
  {
    id: 2,
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup.",
    longDescription: "A sweet favorite combining vanilla syrup and bold espresso.",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1485808191679-5f8c7c97a2ee?q=80&w=800&auto=format&fit=crop",
    category: 'coffee',
    tags: ["Sweet"],
    badges: ["Hot", "Iced"],
    isBestseller: true,
    addons: ["Extra Caramel"],
    calories: "250 kcal",
    allergens: ["Milk"]
  }
];

export const FRANCHISE_STATS: FranchiseStat[] = [
  { label: "Locations", value: 160, suffix: "+" },
  { label: "Cups Served", value: 1, suffix: "M+" },
  { label: "Partner Satisfaction", value: 98, suffix: "%" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Daily Regular",
    comment: "The atmosphere at CnR is unmatched. It's my morning ritual.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/4440955/4440955-sd_360_640_30fps.mp4"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Freelance Designer",
    comment: "Finally, a place that understands 'cozy' but 'productive'.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    video: "https://videos.pexels.com/video-files/4255018/4255018-sd_360_640_25fps.mp4"
  }
];

export const LOCATIONS: Location[] = [
  { id: 1, city: "Mumbai", address: "Bandra Kurla Complex", coordinates: { x: 50, y: 60 } },
  { id: 2, city: "Chennai", address: "Adyar Circle", coordinates: { x: 60, y: 80 } },
];

export const FRANCHISE_MODELS = [
  {
    name: "CNR Elite",
    video: "https://cdn.coverr.co/videos/coverr-coffee-shop-vibes-5246/1080p.mp4",
    details: [
      { label: "FRANCHISE MODEL", value: "FOFO" },
      { label: "FRANCHISE FEE", value: "4 Lakhs" },
      { label: "AREA REQUIRED", value: "250 to 400 sqft" },
      { label: "MANPOWER REQUIRED", value: "4" },
      { label: "TERRITORY EXCLUSIVITY", value: "1 km" },
      { label: "MANPOWER SUPPORT", value: "selected locations only" },
      { label: "KITCHEN EQUIPMENT", value: "2 Lakhs" },
      { label: "INTERIOR AND BRANDING", value: "4 Lakhs" },
      { label: "GST & TRANSPORTATION", value: "Extra" }
    ]
  }
];

export const FRANCHISE_WHY_US = [
  "Proven business model with 160+ locations",
  "End-to-end supply chain management",
  "Comprehensive staff training modules",
  "Continuous R&D and menu innovation"
];

export const FRANCHISE_STEPS = [
  { title: "Enquiry", desc: "Fill the form or call us" },
  { title: "Discussion", desc: "Understanding the model" },
  { title: "Location", desc: "Site review & approval" },
  { title: "Agreement", desc: "Signing the contract" },
  { title: "Setup", desc: "Interiors & Training" },
  { title: "Launch", desc: "Grand Opening" }
];

export const FRANCHISE_SUPPORT = [
  "Marketing & Branding",
  "Operational Manuals",
  "Equipment Sourcing",
  "Quality Audits"
];
