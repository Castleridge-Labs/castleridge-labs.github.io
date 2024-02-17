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
    <>
      <Link className="flex items-center justify-center" href="/">
        <Icons.logo className="h-6 w-6" />
        <span className="sr-only">{siteConfig.name}</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'text-sm font-medium hover:underline underline-offset-4',
                  item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                  item.disabled && 'cursor-not-allowed opacity-80',
                )}
              >
                {item.title}
              </Link>
            ),
        )}
      </nav>
    </>
  );
}
