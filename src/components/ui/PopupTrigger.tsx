'use client';

import React from 'react';
import { Button, ButtonProps } from './Button';
import { useSidebarPopupContext } from '../providers/SidebarPopupProvider';

interface PopupTriggerProps extends Omit<ButtonProps, 'onClick' | 'href'> {
  popupTitle?: string;
  popupSubtitle?: string;
  formType?: 'adviesgesprek' | 'contact' | 'demo' | 'audit';
  source?: string;
  children: React.ReactNode;
}

/**
 * PopupTrigger - A reusable component that triggers the sidebar popup
 * 
 * Usage example:
 * <PopupTrigger 
 *   popupTitle="Gratis SEO audit"
 *   popupSubtitle="Ontdek hoe je hoger kunt ranken"
 *   formType="audit"
 *   source="seo-page"
 *   className="bg-green-500 hover:bg-green-600"
 * >
 *   Aanvragen
 * </PopupTrigger>
 */
const PopupTrigger: React.FC<PopupTriggerProps> = ({
  popupTitle = "Gratis adviesgesprek",
  popupSubtitle = "Ontdek hoe wij jouw bedrijf kunnen laten groeien",
  formType = "adviesgesprek",
  source = "popup-trigger",
  children,
  ...buttonProps
}) => {
  const { openPopup } = useSidebarPopupContext();

  const handleClick = () => {
    openPopup({
      title: popupTitle,
      subtitle: popupSubtitle,
      formType,
      source
    });
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {children}
    </Button>
  );
};

export default PopupTrigger;
