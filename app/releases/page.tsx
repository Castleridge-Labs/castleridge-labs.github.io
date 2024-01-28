import ReleaseItem from '@/components/release-item';
import { Accordion } from '@/components/ui/accordion';

interface Release {
  trigger: string;
  features?: string[];
  fixes?: string[];
}

export default function Home() {
  const releases: Release[] = [
    {
      trigger: 'Release 1.1.1',
      fixes: ['Fixed a bug where some time zones were not being saved correctly.'],
    },
    {
      trigger: 'Release 1.1.0',
      features: ['Added a setting to change the time zone.'],
      fixes: ['Fixed a bug where No Contests were not being handled properly.'],
    },
    {
      trigger: 'Release 1.0.0',
      features: [
        'Able to favourite fights to build up hype',
        'Able to upvote and downvote fights after they have concluded.',
      ],
    },
    {
      trigger: 'Release 0.1.5',
      features: [
        "Preferred Unit Systems for Height and Weight, Whether you're more confortable with KG or LBS, IN, or CM, the choice is yours.",
      ],
    },
  ];
  return (
    <main className="flex min-h-screen flex-col sm:items-center justify-between p-24">
      <div className="md:w-1/3">
        <Accordion type="single" collapsible>
          {releases.map((release, index) => (
            <ReleaseItem
              key={index}
              trigger={release.trigger}
              features={release?.features}
              fixes={release?.fixes}
            />
          ))}
        </Accordion>
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
