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
  // but not for /cases or /cases/ (the main cases listing page)
  const isCaseDetailPage = pathname && pathname.startsWith('/cases/') && pathname !== '/cases' && pathname !== '/cases/';
  
  // Check if we're on the coming soon page (handle trailing slash)
  const isComingSoonPage = pathname === '/coming-soon' || pathname === '/coming-soon/';
  
  return (
    <>
      {/* Hide navbar and footer on coming soon page */}
      {!isComingSoonPage && (
        <>
          {isCaseDetailPage ? <CaseNavbar /> : <Navbar />}
        </>
      )}
      <main className="overflow-x-hidden">
        {children}
      </main>
      {!isComingSoonPage && (
        <>
          <Footer />
          <StickyAppointmentButton />
        </>
      )}
    </>
  );
} 