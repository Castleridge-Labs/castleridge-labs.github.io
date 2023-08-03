import ReleaseItem from "@/components/release-item";
import { Accordion } from "@/components/ui/accordion";

export default function Home() {
  const releases = [
    {
      trigger: "Release 1.0.0",
      features: [
        "Able to favourite fights to build up hype",
        "Able to upvote and downvote fights after they conclude",
      ],
      fixes: ["Fixed issue where fights would not show up"],
    },
    {
      trigger: "Release 0.1.5",
      features: ["Show the tale of the tape with localized units"],
      fixes: ["Fixed issue where fights would not show up"],
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
              features={release.features}
              fixes={release.fixes}
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
