
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Sparkles, Mic2, Waves, Video, Users } from 'lucide-react';

const loungeMoments = [
  { title: 'Tidal drops', description: 'Curated content bursts synchronized across hemispheres for real-time reactions.', icon: Waves },
  { title: 'Spatial audio', description: 'Crystal-clear stage zones with adaptive layering and low-latency handoffs.', icon: Mic2 },
  { title: 'Immersive watch', description: 'Synchronized video lounges with live chat overlays and emoji bursts.', icon: Video },
];

export default function GlobalLoungePage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex w-[min(960px,100%)] flex-col gap-12 pb-16">
      <section className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.2)] border-white/20 bg-white/55 px-8 py-12 shadow-[0_45px_120px_-55px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]">
        <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#0095F6]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#1877F2]/18 blur-3xl" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80 backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
              Global lounge
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              A living lounge for the planet’s most vibrant voices.
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground/80">
              Drop into floating conversations, explore premium lounges, and ride ambient waves that blend video, audio, and live chat with glass-like finesse.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="premium-shadow h-14 rounded-2xl px-7 text-base font-semibold tracking-wide"
                onClick={() => navigate('/map')}
              >
                <Globe className="mr-2 h-5 w-5" />
                Explore map pulses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-white/50 bg-white/55 px-7 text-base font-semibold tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20"
                onClick={() => navigate('/settings')}
              >
                Tune preferences
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.26, 1, 0.48, 1] }}
            className="relative overflow-hidden rounded-[calc(var(--radius)*1.05)] border border-white/20 bg-gradient-to-br from-[#0B1A3E]/85 via-[#0B1A3E]/70 to-[#0B1A3E]/95 p-6 text-white shadow-[0_35px_80px_-50px_rgba(24,119,242,0.6)] backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,149,246,0.25),transparent)]" />
            <div className="relative z-10 space-y-6">
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">Now streaming</p>
                  <p className="mt-1 text-xl font-semibold">Celestial lounge • wave #026</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <Sparkles className="h-5 w-5" />
                </span>
              </header>
              <div className="rounded-3xl border border-white/20 bg-white/10 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                <div className="flex items-start justify-between gap-4">
                  <p className="max-w-[70%] text-sm text-white/80">
                    8 DJs streaming live from Tokyo, Lagos, São Paulo, and Berlin. Real-time translation active in 19 languages.
                  </p>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                    Live
                  </span>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-white/70">
                  <div className="flex -space-x-3">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/15 text-[11px] font-semibold"
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>2,480 tuned in</span>
                  </div>
                </div>
              </div>
              <Button
                variant="ghost"
                className="w-full rounded-xl border border-white/30 bg-white/10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-white/20"
                onClick={() => navigate('/profile')}
              >
                Reserve spotlight
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {loungeMoments.map(moment => (
          <motion.div
            key={moment.title}
            whileHover={{ y: -6 }}
            className="group rounded-[calc(var(--radius)*0.9)] border border-white/20 bg-white/55 p-6 shadow-[0_30px_70px_-50px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/60 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)]">
                <moment.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{moment.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{moment.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.15)] border-white/20 bg-gradient-to-br from-[#1877F2]/25 via-[#0095F6]/20 to-transparent px-8 py-10 text-white shadow-[0_35px_90px_-45px_rgba(24,119,242,0.6)] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-white/70">Premium sessions</p>
            <h3 className="mt-2 text-3xl font-semibold leading-tight">Host your own floating lounge.</h3>
            <p className="mt-3 text-sm text-white/75 max-w-xl">
              Spin up a live lounge with custom branding, curated guest access, and multi-format streaming — all without leaving the map.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:w-60">
            <Button
              size="lg"
              className="h-14 w-full rounded-2xl bg-white/90 text-base font-semibold tracking-wide text-[#0B1A3E] shadow-[0_25px_45px_-30px_rgba(0,0,0,0.45)] hover:bg-white/95"
              onClick={() => navigate('/profile')}
            >
              Start hosting
            </Button>
            <Button
              variant="ghost"
              className="h-12 w-full rounded-xl border border-white/40 bg-white/10 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-white/20"
              onClick={() => navigate('/settings')}
            >
              Configure concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}