import React, { createContext, useContext, useState } from 'react';

export type Role = 'buyer' | 'seller' | 'ambassador' | 'admin';

type AppContextValue = {
  role: Role;
  setRole: (r: Role) => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (t: 'light' | 'dark' | 'system') => void;
  lang: 'fr' | 'en';
  setLang: (l: 'fr' | 'en') => void;
};

const AppCtx = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('buyer');
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [lang, setLang] = useState<'fr' | 'en'>('fr');

  return (
    <AppCtx.Provider value={{ role, setRole, theme, setTheme, lang, setLang }}>
      {children}
    </AppCtx.Provider>
  );
};

export function useApp() {
  const ctx = useContext(AppCtx);
  if (!ctx) {
    throw new Error('useApp must be used within AppProvider');
  }
  return ctx;
}
