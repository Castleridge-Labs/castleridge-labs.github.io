import { Suspense } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen flex-col items-center sm:justify-between container px-2 md:p-28">
      <div className="max-w-2xl my-5 sm:mx-auto">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
