'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Menu, X } from 'lucide-react';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';

interface MobileNavProps {
  items?: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const segment = useSelectedLayoutSegment();

  return (
    <div className="md:hidden">
      <button
        className="flex items-center justify-center w-10 h-10 rounded-md text-gray-600 hover:text-gray-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle Menu</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white border-b border-gray-200 shadow-lg">
          <div className="container py-6 px-4">
            <nav className="flex flex-col space-y-4">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-medium transition-colors hover:text-red-600 py-2',
                        item.href.startsWith(`/${segment}`) 
                          ? 'text-red-600 font-semibold' 
                          : 'text-gray-600',
                        item.disabled && 'cursor-not-allowed opacity-80',
                      )}
                    >
                      {item.title}
                    </Link>
                  ),
              )}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center w-full rounded-lg bg-red-600 px-4 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-red-700"
                >
                  Add to Chrome
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-4">
                <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                  <Icons.discord className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href={siteConfig.links.facebook} target="_blank" rel="noreferrer">
                  <Icons.facebook className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                  <Icons.twitter className="h-6 w-6 text-gray-600 hover:text-gray-900" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
} 