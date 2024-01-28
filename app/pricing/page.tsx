import { Suspense } from 'react';
import AddPaymentCard from './add-payment-card';
import Section from './section';

export default function Page() {
  const paymentCards = [
    {
      buyButtonId: 'buy_btn_1OdP9WEhIoHCoztxVKTOvYut',
      publishableKey:
        'pk_live_51OaWa1EhIoHCoztxLyC1hK11KTWT0I1Qjex3c4dWv3dRgtw2McjOjFlvnHvJOC1vuGOnvBo2C71y7KY92M4b34w300CpbX8CDZ',
      includedFeatures: [
        'Add to your calendar',
        'Member resources',
        'Entry to annual conference',
        'Official member t-shirt',
      ],
    },
  ];

  return (
    <div className="grid">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Simple no-tricks pricing
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit
          ut non voluptas in. Explicabo id ut laborum.
        </p>
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
    </div>
  );
}
