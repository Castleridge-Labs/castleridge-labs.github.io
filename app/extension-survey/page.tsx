"use client";
import { Widget } from '@typeform/embed-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col sm:items-center justify-between p-10">
      <div className="">
      <Widget
        id="qExZynKI"
        className="my-form h-screen w-screen"
        iframeProps={{ title: "UFC Calendar Feedback" }}
      />
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
