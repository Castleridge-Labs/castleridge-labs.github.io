import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UFC Calendar - Never Miss a Fight | Browser Extension',
  description: 'The #1 UFC companion extension. Get live updates, view upcoming events, and track your favorite fighters. Join 2,000+ UFC fans worldwide.',
  keywords: 'UFC, calendar, browser extension, MMA, fights, live updates, Chrome extension',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          {children}
          <footer className="border-t bg-gray-50">
            <div className="container flex flex-col gap-4 sm:flex-row py-8 px-4 md:px-6 items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm text-gray-600">
                  © 2024 Castleridge Labs. All rights reserved.
                </p>
                <p className="text-xs text-gray-500">
                  Helping 2,000+ UFC fans worldwide stay connected to every fight.
                </p>
              </div>
              <nav className="flex gap-4 sm:gap-6">
                <Link 
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors" 
                  href="/terms"
                >
                  Terms of Service
                </Link>
                <Link 
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors" 
                  href="/privacy"
                >
                  Privacy Policy
                </Link>
                <Link 
                  className="text-sm text-gray-600 hover:text-red-600 transition-colors" 
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
