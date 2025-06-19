import { CheckIcon, StarIcon, TrendingUpIcon, ClockIcon, BarChart3Icon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section - Enhanced with gradient background and better CTAs */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium">
                <TrendingUpIcon className="w-4 h-4 mr-2" />
                #1 UFC Extension - 2,000+ Users
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                UFC Calendar
              </h1>
              <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-red-100 leading-relaxed">
                Never miss a fight again. Get live updates, view upcoming events, and track your favorite fighters with one click.
              </p>
            </div>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Link
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg bg-white text-red-600 px-6 text-lg font-semibold shadow-lg transition-all hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Chrome
              </Link>
              <Link
                className="flex-1 inline-flex h-12 items-center justify-center rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white px-6 text-lg font-semibold transition-all hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                href="https://microsoftedge.microsoft.com/addons/detail/ufc-calendar/nhdnpeojmfmonkdhohohokcfkphcpdpc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Add to Edge
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-red-100">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 font-medium">5.0/5 (24 ratings)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with icons and better layout */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_550px]">
            <div className="relative">
              <Image
                alt="UFC Calendar Extension Features"
                className="mx-auto rounded-2xl shadow-2xl"
                height="400"
                src="/features.png"
                width="600"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Live Updates!
              </div>
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">
                  ⚡ Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                  The Ultimate UFC Companion
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Transform your UFC viewing experience with our powerful browser extension. 
                  Stay ahead of every fight with real-time updates and comprehensive event tracking.
                </p>
              </div>
              
              <div className="grid gap-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <ClockIcon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Timezone Detection</h3>
                    <p className="text-gray-600">Automatically shows fight times in your local timezone</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <TrendingUpIcon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Event Updates</h3>
                    <p className="text-gray-600">Real-time notifications for fight results and breaking news</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <BarChart3Icon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fighter Statistics</h3>
                    <p className="text-gray-600">Comprehensive stats and records for every fighter</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <EyeOffIcon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Spoiler Protection</h3>
                    <p className="text-gray-600">Hide results until you're ready to see them</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-lg bg-red-600 px-8 text-base font-medium text-white shadow-lg transition-all hover:bg-red-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Install Now - It's Free
                </Link>
                <Link
                  className="inline-flex h-11 items-center justify-center rounded-lg border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
                  href="#demo"
                >
                  Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Enhanced design */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium">
                💬 User Reviews
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Loved by UFC Fans Worldwide
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600">
                Join thousands of satisfied users who never miss a fight
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Really like the dropdown extension. Easy to check in on what's happening... 
                  Do you know if there is anything similar for boxing or Bellator?"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mahad M</p>
                    <p className="text-sm text-gray-500">Chrome User</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Amazing extension, especially for us Europeans who have a very hard time with these timelines."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">M</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Manos Mihalenas</p>
                    <p className="text-sm text-gray-500">European User</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  "Love it, 100% just what I was looking for instead of just googling 'ufc events' 45 times a week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-semibold text-sm">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">UFC Fan</p>
                    <p className="text-sm text-gray-500">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - New interactive showcase */}
      <section id="demo" className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8 mb-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-green-100 text-green-800 px-4 py-2 text-sm font-medium">
                🎬 See It In Action
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                UFC Calendar in Action
              </h2>
              <p className="mx-auto max-w-[700px] text-lg text-gray-600">
                Watch how easy it is to stay updated with all UFC events
              </p>
            </div>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group cursor-pointer">
                  <Image
                    alt="Extension Popup View"
                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    height="250"
                    src="/action1.png"
                    width="300"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">Quick Access Popup</p>
                </div>
                <div className="group cursor-pointer">
                  <Image
                    alt="Fight Details View"
                    className="rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                    height="250"
                    src="/action2.png"
                    width="300"
                  />
                  <p className="mt-2 text-sm font-medium text-gray-700">Detailed Fight Cards</p>
                </div>
              </div>
            </div>
            
            <div className="lg:order-first">
              <Image
                alt="Main Extension Interface"
                className="rounded-2xl shadow-2xl"
                height="400"
                src="/action4.png"
                width="600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section - Enhanced with better design */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Available on All Major Browsers
              </h2>
              <p className="mx-auto max-w-[700px] text-xl text-gray-300">
                Get UFC Calendar on your preferred browser and never miss another fight
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
              <Link
                href="https://chrome.google.com/webstore/detail/ufc-calendar-with-live-up/pdagojbjdekpdicaefbiolkpgobiaoch"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-xl p-6 hover:shadow-2xl transition-all hover:scale-105"
              >
                <Image
                  className="h-16 w-auto mx-auto"
                  src="/chromestore.png"
                  alt="Chrome Web Store"
                  width={200}
                  height={64}
                />
                <p className="mt-3 text-gray-900 font-medium">Add to Chrome</p>
                <p className="text-sm text-gray-600">2,000+ users</p>
              </Link>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">More platforms coming soon:</p>
                <div className="flex gap-4 opacity-50">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">Firefox</span>
                  </div>
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-sm">Safari</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 bg-red-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Ready to Never Miss a Fight?
              </h2>
              <p className="mx-auto max-w-[600px] text-xl text-red-100">
                Join 2,000+ UFC fans who stay updated with UFC Calendar
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
            
            <p className="text-sm text-red-200">
              ✓ Free forever ✓ No signup required ✓ Instant access
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
