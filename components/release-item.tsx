import { Icons } from '@/components/icons';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface ReleaseItemProps {
  trigger: string;
  features?: string[];
  fixes?: string[];
}

export default function ReleaseItem({ trigger, features, fixes }: ReleaseItemProps) {
  const releaseVersion = trigger.split(' ')[1];
  return (
    <AccordionItem value={trigger}>
      <AccordionTrigger>{trigger}</AccordionTrigger>
      <AccordionContent>
        {features && features.length > 0 && (
          <div className="flex items-center">
            <Icons.eyes
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-eye mr-1"
            />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Here&lsquo;s what&lsquo;s new in v{releaseVersion}
            </h4>
          </div>
        )}
        {features && features.length > 0 ? (
          <ul className="my-6 ml-6 list-disc">
            {features?.map((feature, index) => (
              <li className="mt-2" key={index}>
                {feature}
              </li>
            ))}
          </ul>
        ) : null}
        {fixes && fixes.length > 0 ? (
          <div className="flex items-center">
            <Icons.checkMark
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-check mr-1"
            />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Fixed issues</h4>
          </div>
        ) : null}

        <ul className="my-6 ml-6 list-disc">
          {fixes?.map((fix, index) => (
            <li className="mt-2" key={index}>
              {fix}
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}
