import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full min-h-screen flex-col items-center sm:justify-between container px-2 md:p-28">
      <div className="mx-6 max-w-3xl py-20 sm:mx-auto">
          <Suspense>{children}</Suspense>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Castleridge Labs
          </a>
        </div>
      </div>
    </main>
  );
}
