import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <MainNav items={siteConfig.mainNav} />
        
        <div className="flex items-center gap-4">
          {/* Primary CTA */}
          <Link
            href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Add to Chrome
          </Link>
          
          {/* Social Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.discord className="h-5 w-5" />
                <span className="sr-only">Join Our Discord</span>
              </div>
            </Link>
            <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: 'icon',
                  variant: 'ghost',
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          <MobileNav items={siteConfig.mainNav} />
        </div>
      </div>
    </header>
  );
}
