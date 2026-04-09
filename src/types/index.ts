export type View = 'dashboard' | 'appointments' | 'services' | 'staff' | 'clients' | 'settings' | 'reports';

export interface Appointment {
  id: string;
  client: string;
  service: string;
  time: string;
  stylist: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  price: number;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  duration: string;
  price: number;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
}