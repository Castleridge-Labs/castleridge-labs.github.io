"use client";

export default function Home() {
  return (
    <main className="flex flex-col px-24 h-screenr">
        <iframe src="https://calendar.google.com/calendar/embed?src=03a2d54379aa24f372e2d616e1d50ee4725e833e43daaecd39235f2f623fe8d2%40group.calendar.google.com&ctz=America%2FLos_Angeles" style={{border: 0}} width="800" height="600"></iframe>

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
