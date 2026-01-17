import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // For iPhone notch support
  themeColor: '#F5F1EB',
};

export const metadata: Metadata = {
  title: "Luna's Bakehouse, Devon",
  description: "Discover Luna's Bakehouse. Artisan breads and pastries. Organic local ingredients. Fresh treats and coffee. Watch our bakers at work. Visit us Tuesday to Sunday!",
  keywords: ["bakery", "artisan bread", "organic flour", "sourdough", "Devon", "Dartington", "Totnes", "heritage grains", "stone-milled"],
  openGraph: {
    title: "Luna's Bakehouse, Devon",
    description: "Artisan breads and pastries. Organic local ingredients.",
    type: "website",
    locale: "en_GB",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Luna's Bakehouse",
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} overflow-x-hidden`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased bg-[#F5F1EB] overflow-x-hidden" suppressHydrationWarning>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
