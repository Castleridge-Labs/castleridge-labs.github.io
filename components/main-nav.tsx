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
      <Link className="flex items-center space-x-2 active:scale-[0.9] transition-all" href="/">
        <Icons.logo className="h-8 w-8 text-primary" />
        <span className="hidden font-bold text-xl text-foreground sm:inline-block">
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
                    'flex items-center text-xs font-bold uppercase tracking-widest transition-all hover:text-primary active:scale-[0.9]',
                    item.href.startsWith(`/${segment}`)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                    item.disabled && 'cursor-not-allowed opacity-50',
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
