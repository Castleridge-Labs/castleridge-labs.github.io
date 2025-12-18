import {
  StarIcon,
  UsersIcon,
  ZapIcon,
  ShieldIcon,
  CrosshairIcon,
} from 'lucide-react';
import Image from 'next/image';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';

const AboutPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ee202008] blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="w-full pt-48 pb-20 px-4 flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              The Mission Control
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-[800] tracking-tighter text-white uppercase mb-8 leading-[0.85]">
            Built For <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              The Octagon
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Born from a simple frustration: missing fights. UFC Calendar was built to be the most reliable and user-friendly companion for UFC enthusiasts worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-4 mb-24">
          {[
            { icon: UsersIcon, label: "2,000+", sub: "Active Combatants" },
            { icon: StarIcon, label: "5.0/5", sub: "Verified Rating" },
            { icon: ZapIcon, label: "Instant", sub: "Latency Sync" }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-[#050505] flex flex-col items-center text-center group hover:border-red-500/20 transition-colors">
              <stat.icon className="w-6 h-6 text-red-500 mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-3xl font-bold text-white mb-1 uppercase tracking-tighter">{stat.label}</span>
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">{stat.sub}</span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-4xl px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-20 border-t border-white/5">
          <div className="text-left space-y-6">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
              By Fans, For Fans.
            </h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              Developed by <strong>Castleridge Labs</strong>, we focus on the core features that matter—without the clutter. We ensure you never miss a moment of the action, whether it's the main event or the early prelims.
            </p>
            <div className="space-y-4">
              {[
                { icon: ShieldIcon, text: "Privacy-first architecture" },
                { icon: CrosshairIcon, text: "Real-time accuracy" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.1em] text-zinc-500">
                  <item.icon className="w-4 h-4 text-red-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-red-600/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-zinc-900 shadow-2xl">
              <div className="h-6 bg-zinc-800 border-b border-white/5 flex items-center px-3 gap-1.5 focus:outline-none">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <Image
                alt="UFC Calendar in action"
                className="w-full h-auto opacity-80"
                height="400"
                src="/features.png"
                width="600"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-20 border-t border-white/5 flex flex-col items-center gap-6">
          <Icons.logo />
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
              CASTLERIDGE LABS // OPERATIONAL STATUS
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-white uppercase">Systems Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <section className="w-full py-24 px-4 flex flex-col items-center text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter mb-4">
            Join The Ranks
          </h2>
          <p className="text-zinc-500 mb-8 font-mono text-sm uppercase tracking-widest">
            2,000+ Combatant Fans Are Already Here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.links.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-black hover:bg-zinc-200 transition-colors uppercase tracking-widest"
            >
              Deploy To Chrome
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
