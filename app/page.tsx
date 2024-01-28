import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center sm:justify-between container md:p-28">
      <div className="w-full md:flex md:justify-around place-items-center z-[-1]">
        <p className="text-balance w-full md:max-w-[30ch] text-xl lg:text-3xl font-semibold mb-1 mt-1">
          Get live updates of UFC events and view previous/upcoming events with one click.
        </p>

        <Image
          className="min-w-[30ch] rounded-md border bg-muted transition-colors"
          src="/one.png"
          alt="ufc calendar picture"
          width={400}
          height={500}
          priority
        />
      </div>

      <div className="flex flex-row space-x-4 w-full">
        <div className="flex flex-row w-full xs-13 lg:ml-80 mt-10 sm:mt-0">
          <a
            href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
            className="group rounded-lg border px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={'/chromestore.png'} alt="logo" width={340} height={96} />
            <h2 className={`mb-3 text-xl font-semibold`}>UFC Calendar for Chrome</h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>It&lsquo;s free!</p>
          </a>
        </div>
        <div className="flex flex-row w-full lg:ml-80 mt-10 sm:mt-0">
          <a
            href="https://microsoftedge.microsoft.com/addons/detail/ufc-calendar/nhdnpeojmfmonkdhohohokcfkphcpdpc"
            className="flex flex-col justify-end group rounded-lg border sm:w-96 px-5 py-4 transition-colors border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-xl font-semibold`}>UFC Calendar for Edge</h2>
            <p className={`max-w-[30ch] text-sm opacity-50`}>It&lsquo;s free!</p>
          </a>
        </div>
      </div>
      <p>Available on Chrome & Edge Browsers</p>

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
