import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout/AppLayout";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Import fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next Win | Creatief Digital Agency",
  description: "Next Win is een creatief digital bureau dat bedrijven helpt groeien door innovatieve digitale oplossingen.",
  keywords: ["digital agency", "webdesign", "online marketing", "website ontwikkeling", "content creatie", "Next Win"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden relative w-full`}
      >
        <AppLayout>{children}</AppLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
