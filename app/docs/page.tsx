'use client';
import React from 'react';
import { RedocStandalone } from 'redoc';

export default function ApiDocumentation() {
  const RedocOptions = {
    scrollYOffset: 30,
  };
  return (
    <main className="container h-screen overflow-hidden px-5 md:px-8">
      <div className="h-5/6 overflow-y-scroll">
        <RedocStandalone
          specUrl="https://nz3shsw5j0.execute-api.us-west-2.amazonaws.com/v2/docs"
          options={RedocOptions}
        />
      </div>
    </main>
  );
}
