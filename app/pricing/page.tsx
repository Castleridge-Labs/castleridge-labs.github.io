import { Suspense } from 'react';
import AddPaymentCard from './add-payment-card';
import Section from './section';

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
    <div className="mb-6">
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
    </div>
  );
}
