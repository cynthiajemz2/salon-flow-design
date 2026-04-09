import { View, Appointment, Service, Staff } from '../types';

export const COLORS = {
  primary: '#B08968', // Coffee/Gold
  secondary: '#EDE0D4', // Cream
  accent: '#7F5539', // Darker brown
  bg: '#F8F9FA',
  text: '#2D2D2D',
};

export const ROUTES: Record<View, string> = {
  dashboard: '/dashboard',
  appointments: '/appointments',
  services: '/services',
  staff: '/staff',
  clients: '/clients',
  reports: '/reports',
  settings: '/settings',
};

export const API_BASE_URL = '/api';

export const CURRENCY_CODE = 'KES';
export const CURRENCY_SYMBOL = 'KSh';

export const IMAGES = {
  interior: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/61c1bef5-9e43-4c53-8d37-fda43f771e1e/salon-interior-cb6becea-1775728877229.webp",
  styling: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/61c1bef5-9e43-4c53-8d37-fda43f771e1e/hair-styling-4fd17faa-1775728876929.webp",
  products: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/61c1bef5-9e43-4c53-8d37-fda43f771e1e/salon-products-0ebe0513-1775728876740.webp",
  receptionist: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/61c1bef5-9e43-4c53-8d37-fda43f771e1e/receptionist-3ce302c9-1775728877335.webp",
  reports: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/61c1bef5-9e43-4c53-8d37-fda43f771e1e/reports-background-2fc9e4c3-1775729632898.webp",
};

export const MOCK_APPOINTMENTS: Appointment[] = [
  { id: '1', client: "Jane Wanjiku", service: "Balayage Hair Color", time: "10:00 AM", stylist: "Faith M.", status: "confirmed", price: 15000 },
  { id: '2', client: "John Kamau", service: "Gentleman's Cut", time: "11:30 AM", stylist: "David O.", status: "pending", price: 4500 },
  { id: '3', client: "Mercy Achieng", service: "Deep Tissue Massage", time: "01:00 PM", stylist: "Grace W.", status: "confirmed", price: 8500 },
  { id: '4', client: "Esther Nyambura", service: "Manicure & Pedicure", time: "02:30 PM", stylist: "Sarah N.", status: "confirmed", price: 6500 },
  { id: '5', client: "Peter Mwangi", service: "Beard Trim", time: "04:00 PM", stylist: "David O.", status: "cancelled", price: 2500 },
];

export const MOCK_SERVICES: Service[] = [
  { id: 's1', name: "Signature Haircut", category: "Hair", duration: "45m", price: 6000 },
  { id: 's2', name: "Full Head Balayage", category: "Color", duration: "3h", price: 18000 },
  { id: 's3', name: "Shellac Manicure", category: "Nails", duration: "60m", price: 4500 },
  { id: 's4', name: "Express Facial", category: "Spa", duration: "30m", price: 5000 },
  { id: 's5', name: "Bridal Makeup", category: "Makeup", duration: "90m", price: 12000 },
];

export const MOCK_STAFF: Staff[] = [
  { id: 'st1', name: "Faith Mutua", role: "Master Stylist", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=200", rating: 4.9 },
  { id: 'st2', name: "David Omari", role: "Senior Barber", image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=200", rating: 4.8 },
  { id: 'st3', name: "Grace Wambui", role: "Esthetician", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200", rating: 5.0 },
  { id: 'st4', name: "Sarah Njeri", role: "Nail Artist", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", rating: 4.7 },
];