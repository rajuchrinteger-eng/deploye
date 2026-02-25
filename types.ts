
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  price: string;
  image: string;
  category: 'coffee' | 'tea' | 'snack' | 'beverage';
  tags?: string[];
  badges?: string[];
  addons?: string[];
  isBestseller?: boolean;
  calories?: string;
  allergens?: string[];
}

export interface ComboItem {
  id: number;
  name: string;
  items: string[];
  price: string;
  tagline: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  video?: string;
}

export interface FranchiseStat {
  label: string;
  value: number;
  suffix: string;
}

export interface Location {
  id: number;
  city: string;
  address: string;
  coordinates: { x: number; y: number };
}

export interface SupplyCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: {
    group: string;
    list: string[];
  }[];
  image: string;
}

export interface SupplyItem {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
}

export interface CollaborativeService {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefit: string;
  group: 'Strategic' | 'Institutional' | 'Lifestyle' | 'Digital';
}
