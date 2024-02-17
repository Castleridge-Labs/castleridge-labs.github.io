import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                UFC Calendar
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Get live updates of UFC events and view previous/upcoming events with one click.{' '}
              </p>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
              >
                Download on Chrome
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://microsoftedge.microsoft.com/addons/detail/ufc-calendar/nhdnpeojmfmonkdhohohokcfkphcpdpc"
              >
                Download on Edge
              </Link>
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Image"
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/features.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  The best browser extension for UFC.
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  UFC Calendar is a browser extension designed to optimize your UFC viewing
                  experience. It offers features to enhance your event tracking, ensuring you stay
                  updated with upcoming fights and events seamlessly.
                </p>
              </div>
              <ul className="grid gap-2 py-4">
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  See fight times in your timezone
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Get Live updates
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  View fight statistics
                </li>
                <li>
                  <CheckIcon className="mr-2 inline-block h-4 w-4" />
                  Hide Results
                </li>
              </ul>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Now
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  User Reviews
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What our users are saying
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  We are proud to have a wide range of users who are satisfied with our services.
                  Here are some of their testimonials.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;Really like the dropdown extension. Easy to check in on what&apos;s
                    happening... Do you know if there is anything similar for boxing or
                    Bellator?&quot;
                  </p>
                  <p className="mt-2 text-sm text-gray-400 dark:text-gray-300">- Mahad M</p>
                </div>
                <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;Amazing extension, especially for us Europeans who have a very hard time
                    with these timelines.&quot;
                  </p>
                  <p className="mt-2 text-sm text-gray-400 dark:text-gray-300">- Manos Mihalenas</p>
                </div>
                <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;Love it, 100% just what I was looking for instead of just googling
                    &apos;ufc events&apos; 45 times a week.&quot;
                  </p>
                  <p className="mt-2 text-sm text-gray-400 dark:text-gray-300">
                    - naytivlost lastname
                  </p>
                </div>
                <div className="p-4 border rounded-md shadow-sm bg-white dark:bg-gray-800">
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;This is really cool.&quot;
                  </p>
                  <p className="mt-2 text-sm text-gray-400 dark:text-gray-300">
                    - Mustafaa Joly
                  </p>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center justify-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Image"
              className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="/action4.png"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Screenshots
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  See UFC Calendar in action
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some screenshots of our browser extension in action.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Image
                  alt="Screenshot 1"
                  className="mx-auto aspect-content overflow-hidden rounded-md object-cover object-center"
                  height="200"
                  src="/action1.png"
                  width="300"
                />
                <Image
                  alt="Screenshot 2"
                  className="mx-auto aspect-content overflow-hidden rounded-md object-cover object-center"
                  height="200"
                  src="/action2.png"
                  width="200"
                />
                <Image
                  alt="Screenshot 3"
                  className="mx-auto aspect-content overflow-hidden rounded-md object-cover object-center"
                  height="200"
                  src="/action3.png"
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Platforms
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              See where you can download us.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Link
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  src={'/chromestore.png'}
                  alt="logo"
                  width={340}
                  height={96}
                />
              </Link>
            </div>
            {/* <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Link
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  src={'/chromestore.png'}
                  alt="logo"
                  width={340}
                  height={96}
                />
              </Link>
            </div> */}
            {/* <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <Link
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                  src={'/chromestore.png'}
                  alt="logo"
                  width={340}
                  height={96}
                />
              </Link>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
