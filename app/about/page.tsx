import {
  BarChart3Icon,
  ClockIcon,
  EyeOffIcon,
  GlobeIcon,
  StarIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedStats } from '@/components/animated-stats';

const AboutPage: React.FC = () => {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              About UFC Calendar
            </h1>
            <p className="text-xl md:text-2xl text-red-100 leading-relaxed">
              The simple, powerful browser extension for every UFC fan.
            </p>
          </div>
        </div>
      </section>

      {/* About & Mission Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">
                  🎯 Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Built by Fans, for Fans
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  UFC Calendar was born from a simple frustration: missing fights. Developed by{' '}
                  <strong>Castleridge Labs</strong>, our extension was built to be the most
                  reliable and user-friendly companion for UFC enthusiasts.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We focus on core features that matter, without the clutter, to ensure you never
                  miss a moment of the action.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                alt="UFC Calendar in action"
                className="rounded-2xl shadow-2xl"
                height="400"
                src="/features.png"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">
              Trusted by the Community
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-red-600" />
                </div>
                <AnimatedStats value={2000} suffix="+" />
                <p className="text-gray-600">Active Users</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">5.0/5</div>
                <p className="text-gray-600">Stars from 24 Ratings</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-8 h-8 text-red-600" />
                </div>
                <AnimatedStats value={10} suffix="+" />
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Reusing from homepage */}
      <section className="w-full py-16 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the UFC Calendar Community
              </h2>
              <p className="text-xl text-red-100">
                Ready to transform your UFC viewing experience?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg bg-white text-red-600 px-8 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105"
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Install Free Extension
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
