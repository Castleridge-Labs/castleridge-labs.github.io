import { ClockIcon, TrendingUpIcon, BarChart3Icon, EyeOffIcon, UsersIcon, GlobeIcon } from 'lucide-react';
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
              The most trusted UFC companion, helping 50,000+ fans worldwide stay connected to every fight.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">
                    🎯 Our Mission
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Never Miss Another Fight
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    UFC Calendar was born from a simple frustration: missing fights because of timezone confusion, 
                    forgotten dates, or last-minute schedule changes. We built the ultimate solution for UFC fans 
                    who want to stay connected to every moment of the action.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">What Makes Us Different</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-600">Real-time updates that keep you ahead of the game</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-600">Smart timezone detection for global fans</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-600">Comprehensive fighter stats and analytics</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-gray-600">Spoiler protection for delayed viewing</p>
                    </div>
                  </div>
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
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="w-5 h-5 text-red-500" />
                    <span className="font-semibold text-gray-900">50,000+ Users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by UFC Fans Everywhere
              </h2>
              <p className="text-lg text-gray-600">
                Our numbers speak for themselves
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UsersIcon className="w-8 h-8 text-red-600" />
                </div>
                <AnimatedStats value={50000} suffix="+" />
                <p className="text-gray-600">Active Users</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GlobeIcon className="w-8 h-8 text-red-600" />
                </div>
                <AnimatedStats value={100} suffix="+" />
                <p className="text-gray-600">Countries Served</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUpIcon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">4.8/5</div>
                <p className="text-gray-600">User Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-8 mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built for Every Type of UFC Fan
              </h2>
              <p className="text-lg text-gray-600">
                Whether you're a casual viewer or a die-hard enthusiast, we've got you covered
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <ClockIcon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Timezone Detection</h3>
                <p className="text-gray-600 leading-relaxed">
                  No more mental math or missed fights. Our extension automatically detects your location 
                  and shows all fight times in your local timezone. Perfect for international fans who 
                  struggle with time conversions.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <TrendingUpIcon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Updates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get instant notifications about fight results, card changes, and breaking news. 
                  Our system monitors multiple sources to ensure you're always first to know what's happening.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <BarChart3Icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Fighter Data</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access detailed fighter statistics, records, and performance analytics. Make informed 
                  predictions and understand the matchups better with our comprehensive database.
                </p>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <EyeOffIcon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Spoiler Protection</h3>
                <p className="text-gray-600 leading-relaxed">
                  Can't watch live? No problem. Hide fight results until you're ready to see them. 
                  Perfect for fans who prefer to watch events on their own schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Built by UFC Fans, for UFC Fans
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                UFC Calendar is developed by <strong>Castleridge Labs</strong>, a team of passionate 
                UFC enthusiasts and developers who understand the pain points of being a dedicated fan. 
                We've experienced the frustration of missed fights, timezone confusion, and outdated 
                information firsthand.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                That's why we're committed to building the most reliable, feature-rich UFC companion 
                available. Every feature is designed based on real user feedback and our own experiences 
                as lifelong MMA fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-red-200">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                <span>No signup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                <span>Instant access</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
