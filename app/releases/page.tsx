import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-1/3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Release 1.0.0</AccordionTrigger>
            <AccordionContent>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Here's what's new in v1.0.0
              </h4>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Able to favourite fights to build up hype</li>
                <li>Able to upvote and downvote fights after they conclude</li>
              </ul>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                Fixed issues
              </h4>
              <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                <li>Fixed issue where fights would not show up</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
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
