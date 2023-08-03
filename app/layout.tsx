import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UFC Calendar",
  description: "UFC Calendar chrome extension",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
