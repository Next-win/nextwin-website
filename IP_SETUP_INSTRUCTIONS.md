# IP-Based Access Control Setup

I've created a coming soon page and IP-based access control for your Next Win website. Here are your options:

## 🎯 Your IP Address
**Your IP (192.168.1.126) is already configured and allowed.**

## 📋 Setup Options

### Option 1: Server-Side Protection (Recommended)
**Best security, requires server deployment**

1. **Replace your current config:**
   ```bash
   # Backup current config
   mv next.config.js next.config.static.js
   
   # Use the dynamic config
   mv next.config.dynamic.js next.config.js
   ```

2. **Deploy to a server platform:**
   - Vercel (easiest)
   - Netlify
   - Railway
   - Any Node.js hosting

3. **The middleware will automatically block unauthorized IPs**

### Option 2: Client-Side Protection (Static hosting compatible)
**Works with current static export, less secure**

1. **Wrap your app with IP checker** in `src/app/layout.tsx`:
   ```tsx
   import IPChecker from '@/components/IPChecker';
   
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="nl">
         <body>
           <IPChecker>
             <AppLayout>{children}</AppLayout>
           </IPChecker>
         </body>
       </html>
     );
   }
   ```

## ⚙️ Configuration

### Adding More IP Addresses
Edit `src/config/ipConfig.ts`:

```tsx
export const ALLOWED_IPS = [
  '192.168.1.126', // Your current IP
  '192.168.1.100', // Add more IPs like this
  '203.0.113.12',  // External IP example
];
```

### Enable Debug Mode
For testing, set in `src/config/ipConfig.ts`:
```tsx
export const IP_CONFIG = {
  ENABLE_IP_PROTECTION: true,
  DEBUG_MODE: true, // Enable for testing
  REDIRECT_URL: '/coming-soon',
};
```

### Disable Protection Temporarily
```tsx
export const IP_CONFIG = {
  ENABLE_IP_PROTECTION: false, // Disable completely
  // ...
};
```

## 🚀 Testing

1. **Check your IP:**
   - Visit https://whatismyipaddress.com/
   - Make sure it matches what's in the config

2. **Test blocking:**
   - Temporarily remove your IP from the config
   - You should see the coming soon page
   - Add it back to regain access

3. **Test different devices:**
   - Mobile hotspot (different IP)
   - Different network
   - VPN with different location

## 📱 Coming Soon Page

The coming soon page is located at `/coming-soon` and includes:
- Professional Next Win branding
- Contact information
- Progress indicator
- Responsive design

## 🔧 Customization

### Update Contact Info
Edit `src/app/coming-soon/page.tsx`:
- Current email: `gerwin@next-win.nl`
- Current phone: `+31 6 4354 5506`
- Update progress percentage

### Styling
The page uses Tailwind CSS - modify classes in the coming soon component.

## 🔒 HTTPS Security

**Automatic HTTPS enforcement is enabled:**
- All HTTP requests redirect to HTTPS (except localhost)
- HSTS headers included for enhanced security
- All IP detection services use HTTPS only

## 📱 Mobile Compatibility

**Enhanced mobile support:**
- Improved hydration handling
- Faster coming-soon page loading
- No white screen issues on mobile devices

## 🎯 Which Option Should You Choose?

- **Option 1 (Server-side)**: More secure, works at the network level, includes HTTPS enforcement
- **Option 2 (Client-side)**: Works with your current hosting, less secure, but includes mobile fixes

**Recommendation**: Go with Option 1 if you can deploy to Vercel/Netlify for full security, otherwise use Option 2 as a temporary solution. 