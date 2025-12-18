import { BrowserSimulation } from "@/components/browser-simulation"
import { FeatureGrid } from "@/components/feature-grid"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full pt-48 pb-20 px-4 flex flex-col items-center text-center relative overflow-hidden">
        {/* Cinematic Backdrop Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ee202008] blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              The Ultimate UFC Companion
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-[800] tracking-tighter text-white uppercase mb-8 leading-[0.85]">
            Never Miss <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              A Fight Again
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-16 px-4">
            Join 2,000+ fans using the #1 UFC companion extension. Get live updates, view upcoming events, and track your favorite fighters with premium precision.
          </p>
        </div>

        <div className="w-full relative z-10">
          <BrowserSimulation />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-[#050505] border-y border-white/5">
        <FeatureGrid />
      </section>

      {/* Quick Access Section / Call to Action */}
      <section className="w-full py-24 px-4 flex flex-col items-center text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
            Ready for Fight Night?
          </h2>
          <p className="text-zinc-500 mb-8 font-mono text-sm uppercase tracking-widest">
            Join 2,000+ fans tracking live UFC data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.links.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black hover:bg-zinc-200 transition-colors uppercase tracking-widest"
            >
              Add to Chrome
            </a>
            <a
              href={siteConfig.links.edge}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 text-sm font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-widest"
            >
              Add to Edge
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
