import Link from 'next/link';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full pointer-events-none mix-blend-difference text-white">
      <div className="w-full flex h-24 items-start justify-between px-8 py-8 md:px-12 md:py-8">

        {/* Anti-Logo */}
        <div className="pointer-events-auto">
          <Link href="/" className="flex flex-col gap-1 group">
            <span className="text-xs font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              UFC_Calendar_Ext
            </span>
            <span className="h-px w-0 group-hover:w-full bg-white transition-all duration-300" />
          </Link>
        </div>

        {/* Anti-Nav Actions */}
        <div className="pointer-events-auto flex items-center gap-8">
          <Link href={siteConfig.links.discord} target="_blank" className="hidden md:block text-xs font-mono uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-red-500 transition-colors">
            Community
          </Link>

          <Link href={siteConfig.links.twitter} target="_blank" className="hidden lg:block text-xs font-mono uppercase tracking-widest opacity-50 hover:opacity-100 hover:text-red-500 transition-colors">
            Twitter
          </Link>

          {/* Minimal CTA */}
          <Link
            href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-xs font-bold uppercase tracking-widest group-hover:text-red-500 transition-colors">
              Get Extension
            </span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:bg-red-500 transition-colors animate-pulse" />
          </Link>
        </div>
      </div>
    </header>
  );
}
