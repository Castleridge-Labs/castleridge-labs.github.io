import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { MainNav } from '@/components/main-nav';

export function SiteHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <MainNav items={siteConfig.mainNav} />
      <div className="flex items-center justify-end ml-3">
        <nav className="flex items-center space-x-1">
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
      </div>
    </header>
  );
}
