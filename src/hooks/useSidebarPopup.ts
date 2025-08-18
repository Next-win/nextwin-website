'use client';

import { useState, useCallback } from 'react';

interface PopupConfig {
  title?: string;
  subtitle?: string;
  formType?: 'adviesgesprek' | 'contact' | 'demo' | 'audit';
  source?: string;
}

export const useSidebarPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<PopupConfig>({});

  const openPopup = useCallback((popupConfig?: PopupConfig) => {
    if (popupConfig) {
      setConfig(popupConfig);
    }
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    config,
    openPopup,
    closePopup
  };
};
