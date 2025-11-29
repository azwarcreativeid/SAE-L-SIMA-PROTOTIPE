
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
  subItems?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string[]; // Array of paragraphs for full article
  image: string;
  category: string;
  author?: string;
}

export interface EventItem {
  title: string;
  date: string;
  location?: string;
}

export interface DetailFacility {
  title: string;
  description: string;
  image?: string;
}

export interface ZoneItem {
  id: number; // Added ID for routing
  title: string;
  description: string; // Short description for card
  longDescription: string; // Detailed description for sub-page
  items: string[]; // Simple list for card
  detailItems: DetailFacility[]; // Detailed list for sub-page
  icon: LucideIcon;
  image: string;
  gallery: string[]; // Additional images
  contact?: {
    phone?: string;
    email?: string;
    locationLabel?: string;
  };
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: 'Nature' | 'Activities' | 'Products' | 'Visits' | 'All';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingItem {
  title: string;
  price: number;
  unit: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProductItem {
  id: number;
  name: string;
  category: 'Batik' | 'Lukisan' | 'Pertanian' | 'Kerajinan' | 'Lainnya';
  price: number;
  image: string;
  description: string;
  gallery?: string[];
}

export interface CartItem extends ProductItem {
  quantity: number;
}