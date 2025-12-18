import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';

const ContactPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#ee202008] blur-[120px] rounded-full pointer-events-none" />

      {/* Content Section */}
      <section className="w-full pt-48 pb-20 px-4 flex flex-col items-center text-center relative z-10">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">
              Connect With Us
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-[800] tracking-tighter text-white uppercase mb-8 leading-[0.85]">
            Drop A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
              Message
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-xl mx-auto font-medium leading-relaxed">
            Have questions, feedback, or need support? Our team at Castleridge Labs is ready to assist.
          </p>
        </div>

        <div className="w-full max-w-md mx-auto p-8 rounded-2xl border border-white/5 bg-[#050505] shadow-2xl relative overflow-hidden group">
          {/* Subtle Internal Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-red-500/5 blur-3xl group-hover:bg-red-500/10 transition-colors" />

          <form className="space-y-6 relative z-10">
            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Full Name</label>
              <Input
                className="bg-[#111] border-white/5 focus:border-red-500/50 text-white placeholder:text-zinc-700 h-12"
                placeholder="ALEX VOLKANOVSKI"
                type="text"
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email Address</label>
              <Input
                className="bg-[#111] border-white/5 focus:border-red-500/50 text-white placeholder:text-zinc-700 h-12"
                placeholder="CHAMP@DOMAIN.COM"
                type="email"
              />
            </div>

            <div className="space-y-2 text-left">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Message</label>
              <textarea
                className="w-full h-32 p-4 rounded-md bg-[#111] border border-white/5 focus:border-red-500/50 focus:outline-none text-white placeholder:text-zinc-700 transition-colors resize-none"
                placeholder="HOW CAN WE HELP?"
              />
            </div>

            <Button
              className="w-full h-12 bg-white hover:bg-zinc-200 text-black font-bold uppercase tracking-[0.2em] rounded-md transition-all active:scale-[0.98]"
              type="submit"
            >
              Transmit Signal
            </Button>
          </form>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <Icons.logo />
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500">
            CASTLERIDGE LABS // HQ
          </span>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
