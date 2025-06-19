'use client';

import * as React from 'react';
import Link from 'next/link';

import { NavItem } from '@/types/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/icons';
import { useSelectedLayoutSegment } from 'next/navigation';

interface MainNavProps {
  items?: NavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex items-center gap-6 md:gap-8">
      <Link className="flex items-center space-x-2" href="/">
        <Icons.logo className="h-8 w-8 text-red-600" />
        <span className="hidden font-bold text-xl text-gray-900 sm:inline-block">
          UFC Calendar
        </span>
      </Link>
      
      {items?.length ? (
        <nav className="hidden md:flex gap-6">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium transition-colors hover:text-red-600',
                    item.href.startsWith(`/${segment}`) 
                      ? 'text-red-600 font-semibold' 
                      : 'text-gray-600 hover:text-gray-900',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
