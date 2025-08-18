'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import SidebarPopup from '@/components/ui/SidebarPopup';
import { useSidebarPopup } from '@/hooks/useSidebarPopup';

interface PopupConfig {
  title?: string;
  subtitle?: string;
  formType?: 'adviesgesprek' | 'contact' | 'demo' | 'audit';
  source?: string;
}

interface SidebarPopupContextType {
  openPopup: (config?: PopupConfig) => void;
  closePopup: () => void;
  isOpen: boolean;
}

const SidebarPopupContext = createContext<SidebarPopupContextType | undefined>(undefined);

export const useSidebarPopupContext = () => {
  const context = useContext(SidebarPopupContext);
  if (context === undefined) {
    throw new Error('useSidebarPopupContext must be used within a SidebarPopupProvider');
  }
  return context;
};

interface SidebarPopupProviderProps {
  children: ReactNode;
}

export const SidebarPopupProvider: React.FC<SidebarPopupProviderProps> = ({ children }) => {
  const { isOpen, config, openPopup, closePopup } = useSidebarPopup();

  return (
    <SidebarPopupContext.Provider value={{ openPopup, closePopup, isOpen }}>
      {children}
      <SidebarPopup
        isOpen={isOpen}
        onClose={closePopup}
        title={config.title}
        subtitle={config.subtitle}
        formType={config.formType}
        source={config.source}
      />
    </SidebarPopupContext.Provider>
  );
};
