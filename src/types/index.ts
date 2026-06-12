export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'luxury' | 'sports' | 'publicParks';
}

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  message: string;
  projectType?: string;
  area?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
