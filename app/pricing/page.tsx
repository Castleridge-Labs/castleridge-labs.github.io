import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';

export default function Page() {
  const paymentCards = [
    {
      buyButtonId: 'buy_btn_1OdP9WEhIoHCoztxVKTOvYut',
      publishableKey:
        'pk_live_51OaWa1EhIoHCoztxLyC1hK11KTWT0I1Qjex3c4dWv3dRgtw2McjOjFlvnHvJOC1vuGOnvBo2C71y7KY92M4b34w300CpbX8CDZ',
      includedFeatures: ['Add events to your calendar'],
    },
  ];

  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Pricing Plans
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that fits your needs. Upgrade, downgrade, or cancel any time.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Rookie</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-6">For casual fans</p>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">Free</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Access to basic UFC calendar
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Basic Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
          <div className="relative flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500">
            <div className="px-3 py-1 text-sm text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold text-center">Pro</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-6">
                For the ultimate fans
              </p>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$3.99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1" />
                  Access to premium UFC calendar
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Add events to Google Calendar
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Event reminders
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Priority Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">Get Started</Button>
            </div>
          </div>
          <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300">
            <div>
              <h3 className="text-2xl font-bold text-center">Champion</h3>
              <div className="mt-4 text-center text-zinc-600 dark:text-zinc-400">
                <span className="text-4xl font-bold">$9.99</span>/ month
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  4K Video Rendering
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Unlimited Cloud Storage
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Custom Video Templates
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Advanced Collaboration Tools
                </li>
                <li className="flex items-center">
                  <CheckIcon className="text-white text-xs bg-green-500 rounded-full mr-2 p-1" />
                  Dedicated Support
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
      {/* <div className="mb-6">
        <div className="text-center mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pricing</h2>
        </div>
        {paymentCards.map((paymentCard, index) => (
          <Suspense key={index}>
            <Section includedFeatures={paymentCard.includedFeatures}>
              <AddPaymentCard
                buyButtonId={paymentCard.buyButtonId}
                publishableKey={paymentCard.publishableKey}
              />
            </Section>
          </Suspense>
        ))}
      </div> */}
    </main>
  );
}
