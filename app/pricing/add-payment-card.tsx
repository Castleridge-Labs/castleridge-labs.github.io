'use client';

export default function AddPaymentCard({
  buyButtonId,
  publishableKey,
}: {
  buyButtonId: string;
  publishableKey: string;
}) {
  return (
    <>
      <stripe-buy-button
        buy-button-id={buyButtonId}
        publishable-key={publishableKey}
      ></stripe-buy-button>
    </>
  );
}
