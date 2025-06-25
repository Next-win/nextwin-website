'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ALLOWED_IPS, IP_CONFIG } from '../config/ipConfig';

interface IPResponse {
  ip: string;
}

const IPChecker = ({ children }: { children: React.ReactNode }) => {
  // Check if we're on coming-soon page immediately (synchronously)
  const [isComingSoonPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname === '/coming-soon' || pathname === '/coming-soon/' || pathname.includes('/coming-soon');
    }
    return false;
  });

  const [isAllowed, setIsAllowed] = useState<boolean | null>(
    // If we're on coming-soon page or IP protection is disabled, allow immediately
    isComingSoonPage || !IP_CONFIG.ENABLE_IP_PROTECTION ? true : null
  );
  const [isLoading, setIsLoading] = useState(!isComingSoonPage && IP_CONFIG.ENABLE_IP_PROTECTION);
  const router = useRouter();

  useEffect(() => {
    // If already on coming-soon page or IP protection disabled, no need to check
    if (isComingSoonPage || !IP_CONFIG.ENABLE_IP_PROTECTION) {
      return;
    }

    const checkIP = async () => {

      try {
        // Try multiple IP detection services (all HTTPS)
        const services = [
          'https://api.ipify.org?format=json',
          'https://ipapi.co/json/',
          'https://api.my-ip.io/ip.json'
        ];

        let userIP = null;

        for (const service of services) {
          try {
            const response = await fetch(service);
            const data = await response.json();
            userIP = data.ip || data.origin;
            if (userIP) break;
          } catch (error) {
            if (IP_CONFIG.DEBUG_MODE) {
              console.warn(`Failed to get IP from ${service}:`, error);
            }
            continue;
          }
        }

        if (!userIP) {
          console.warn('Could not determine IP address');
          setIsAllowed(false);
          setIsLoading(false);
          return;
        }

        if (IP_CONFIG.DEBUG_MODE) {
          console.log('🔍 Client-side IP Check - Detected IP:', userIP);
        }
        
        const allowed = ALLOWED_IPS.includes(userIP);
        setIsAllowed(allowed);
        
        if (!allowed) {
          if (IP_CONFIG.DEBUG_MODE) {
            console.log('🚫 Client-side IP Blocked:', userIP);
          }
          // Small delay before redirect to prevent flash
          setTimeout(() => {
            router.push(IP_CONFIG.REDIRECT_URL);
          }, 100);
        } else if (IP_CONFIG.DEBUG_MODE) {
          console.log('✅ Client-side IP Allowed:', userIP);
        }
      } catch (error) {
        console.error('Error checking IP:', error);
        // On error, redirect to coming soon (fail secure)
        setIsAllowed(false);
        setTimeout(() => {
          router.push(IP_CONFIG.REDIRECT_URL);
        }, 100);
      } finally {
        setIsLoading(false);
      }
    };

    checkIP();
  }, [router, isComingSoonPage]);

  // Double-check if we're on coming-soon page (for mobile compatibility)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isCurrentlyOnComingSoon = currentPath === '/coming-soon' || currentPath === '/coming-soon/' || currentPath.includes('/coming-soon');
  
  // If we're on coming-soon page, always show content immediately (bypass all checks)
  if (isComingSoonPage || isCurrentlyOnComingSoon) {
    return <>{children}</>;
  }

  // Show loading state (only for non-coming-soon pages)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Checking access...</p>
        </div>
      </div>
    );
  }

  // Show coming soon if not allowed
  if (!isAllowed) {
    return null; // Will redirect to coming-soon page
  }

  // Show normal content if allowed
  return <>{children}</>;
};

export default IPChecker; 