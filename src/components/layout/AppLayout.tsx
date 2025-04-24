'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import StickyAppointmentButton from '../ui/StickyAppointmentButton';
import CaseNavbar from './CaseNavbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  
  // Check if the current page is a case detail page
  // We want to show the specialized navbar for paths like /cases/oudhollandsspel
  // but not for /cases (the main cases listing page)
  const isCaseDetailPage = pathname && pathname.startsWith('/cases/') && pathname !== '/cases';
  
  return (
    <>
      {isCaseDetailPage ? <CaseNavbar /> : <Navbar />}
      <main className="overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <StickyAppointmentButton />
    </>
  );
} 