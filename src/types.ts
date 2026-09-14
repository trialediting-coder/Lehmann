export interface ServiceItem {
  id: string;
  title: string;
  category: 'preventive' | 'cosmetic' | 'restorative' | 'specialty';
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  duration: string;
  idealFor: string;
  imageUrl: string;
  iconName: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  education?: string;
  specialty?: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  badge?: string;
  reviewCount?: string;
  rating: number;
  treatment?: string;
  quote: string;
  date: string;
  initials: string;
}

export interface AppointmentBooking {
  id: string;
  serviceId: string;
  serviceName: string;
  patientType: 'new' | 'returning';
  provider: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredContact: 'phone' | 'email' | 'text';
  insuranceProvider?: string;
  notes?: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}
