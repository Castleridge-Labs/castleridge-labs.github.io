import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="w-full md:flex md:justify-around place-items-center z-[-1]">
        <p className="text-balance w-full md:max-w-[30ch] font-semibold mb-10 text-[min(10vw,30px)]">
          Get live updates of UFC events and view previous/upcoming events with
          one click.
        </p>

        <Image
          className="min-w-[30ch]"
          src="/one.png"
          alt="ufc calendar picture"
          width={400}
          height={500}
          priority
        />
      </div>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="left-0 top-0 flex w-full justify-center lg:static lg:w-auto">
          <a
            href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={"/chromestore.png"}
              alt="logo"
              width={206}
              height={56}
            />
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Get UFC Calendar Now
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              It&lsquo;s free!
            </p>
          </a>
        </div>
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
