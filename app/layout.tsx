import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UFC Calendar - The Ultimate UFC Companion',
  description: 'Never miss a fight again. Get live updates, view upcoming events, and track your favorite fighters. Join 2,000+ UFC fans with the #1 browser extension.',
  keywords: 'UFC, calendar, browser extension, MMA, fights, live updates, Chrome extension',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="fixed inset-0 z-[9999] pointer-events-none bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="flex flex-col min-h-screen relative z-10">
          <SiteHeader />
          {children}
          <footer className="border-t border-white/5 bg-background">
            <div className="container flex flex-col gap-4 sm:flex-row py-8 px-4 md:px-6 items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-white/40">
                  © 2024 Castleridge Labs.
                </p>
              </div>
              <nav className="flex gap-4 sm:gap-6 items-center">
                <Link
                  className="text-xs font-medium text-white/40 hover:text-white transition-colors"
                  href={siteConfig.links.discord}
                  target="_blank"
                >
                  Discord
                </Link>
                <Link
                  className="text-xs font-medium text-white/40 hover:text-white transition-colors"
                  href={siteConfig.links.twitter}
                  target="_blank"
                >
                  Twitter
                </Link>
                <Link
                  className="text-xs font-medium text-white/40 hover:text-white transition-colors"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-xs font-medium text-white/40 hover:text-white transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </footer>
        </div>
        <TailwindIndicator />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
