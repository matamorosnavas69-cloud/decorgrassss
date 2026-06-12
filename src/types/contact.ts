export interface ContactFormData {
  id?: string;
  name: string;
  email: string;
  phone: string;
  projectType: string;
  area?: string;
  message: string;
  createdAt?: string;
  status?: 'pending' | 'contacted' | 'quoted' | 'completed';
}

export interface ContactState {
  isLoading: boolean;
  error: string | null;
  success: boolean;
  contacts: ContactFormData[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
