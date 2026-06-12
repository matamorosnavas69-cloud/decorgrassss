import React, { createContext, useContext, useState } from 'react';

export interface AdminContextType {
  isAdminLoggedIn: boolean;
  adminEmail: string;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const ADMIN_CREDENTIALS = {
  email: 'admin@decorgrass.co',
  password: 'admin123', // En producción usar variables de entorno y hash
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(
    localStorage.getItem('adminLoggedIn') === 'true',
  );
  const [adminEmail, setAdminEmail] = useState(localStorage.getItem('adminEmail') || '');

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      setIsAdminLoggedIn(true);
      setAdminEmail(email);
      localStorage.setItem('adminLoggedIn', 'true');
      localStorage.setItem('adminEmail', email);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdminLoggedIn(false);
    setAdminEmail('');
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
  };

  const value: AdminContextType = {
    isAdminLoggedIn,
    adminEmail,
    login,
    logout,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};

export const useAdmin = (): AdminContextType => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};
