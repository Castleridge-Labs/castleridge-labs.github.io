declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

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
