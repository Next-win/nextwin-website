'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import IPChecker from './IPChecker';
import AppLayout from './layout/AppLayout';

interface ConditionalIPCheckerProps {
  children: React.ReactNode;
}

const ConditionalIPChecker = ({ children }: ConditionalIPCheckerProps) => {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  
  // Ensure we're on client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Check if we're on coming-soon page
  const isComingSoonPage = pathname === '/coming-soon' || pathname === '/coming-soon/';

  // If we're on coming-soon page, bypass IP checking entirely
  if (isComingSoonPage) {
    return <AppLayout>{children}</AppLayout>;
  }

  // For all other pages, use IP protection
  if (!isClient) {
    // Show minimal loading during hydration
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <IPChecker>
      <AppLayout>{children}</AppLayout>
    </IPChecker>
  );
};

export default ConditionalIPChecker; 