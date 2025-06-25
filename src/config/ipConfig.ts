// Centralized IP configuration
export const ALLOWED_IPS = [
  '192.168.1.126', // Your local IP address - ACCESS RESTORED
  '62.45.104.183', // Your current external IP - ACCESS RESTORED
  '127.0.0.1',     // Localhost
  '::1',           // IPv6 localhost
  
  // Add more IP addresses as needed:
  // '192.168.1.100', // Another local IP
  // '10.0.0.50',     // Office IP
  // '203.0.113.12',  // External IP example
  
  // Development IPs (remove in production)
  '0.0.0.0',       // Sometimes used in development
];

// Routes that should always be accessible
export const PUBLIC_ROUTES = [
  '/coming-soon',
  '/favicon.png',
  '/logo-200x37-nextwin.svg',
  '/_next',
  '/api',
];

// Configuration flags
export const IP_CONFIG = {
  // Set to false to disable IP checking entirely
  ENABLE_IP_PROTECTION: true,
  
  // Set to true for more detailed logging (development only)
  DEBUG_MODE: false, // Testing complete - mobile fixes working
  
  // Redirect URL for blocked users
  REDIRECT_URL: '/coming-soon',
}; 