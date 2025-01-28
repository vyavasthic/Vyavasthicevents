export interface Venue {
  id: string;
  name: string;
  // location: string;
  type: 'local' | 'international';
  description: string;
  capacity: number;
  imageUrl: string;
  features: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  author: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  images: string[]; // Add this line
  testimonial?: string; // If testimonials are optional
}


export interface User {
  email: string;
  password: string;
}