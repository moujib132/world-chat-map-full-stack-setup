
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { MapPin, Radar, Compass, Signal, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MapPage() {
  const navigate = useNavigate();

  const KPIs = [
    { label: 'Live clusters', value: '48', hint: 'Adaptive radius 1-15km' },
    { label: 'Ambient rooms', value: '216', hint: 'Curated experiences' },
    { label: 'Now playing', value: '1.2K', hint: 'Conversations in motion' },
  ];

  return (
    <div className="mx-auto flex w-[min(960px,100%)] flex-col gap-12 pb-16">
      <section className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.2)] border-white/20 bg-white/55 px-8 py-12 shadow-[0_45px_120px_-55px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]">
        <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#1877F2]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 top-12 h-64 w-64 rounded-full bg-[#0095F6]/25 blur-3xl" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80 backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
              Immersive Atlas
            </div>
            <div className="space-y-5">
              <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Precision mapping for live conversations.
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground/80">
                Glide through hyper-local clusters, watch ambient presence pulses, and drop into glassy map rooms engineered to feel ultra-modern and tactile.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="premium-shadow h-14 rounded-2xl px-7 text-base font-semibold tracking-wide"
                onClick={() => navigate('/lounge')}
              >
                <Compass className="mr-2 h-5 w-5" />
                Jump to lounge
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-2xl border-white/50 bg-white/50 px-7 text-base font-semibold tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                onClick={() => navigate('/')}
              >
                Return home
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[calc(var(--radius)*1.05)] border border-white/20 bg-gradient-to-br from-[#0B1A3E]/90 via-[#0B1A3E]/70 to-[#0B1A3E]/95 p-6 text-white shadow-[0_35px_80px_-50px_rgba(24,119,242,0.65)] backdrop-blur-3xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(24,119,242,0.2),transparent)]" />
            <div className="relative z-10 space-y-6">
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-white/60">Live layer</p>
                  <p className="mt-1 text-xl font-semibold text-white">Global map canvas</p>
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10">
                  <MapPin className="h-5 w-5" />
                </span>
              </header>
              <div className="relative h-48 w-full overflow-hidden rounded-3xl border border-white/15 bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(24,119,242,0.45),transparent_55%),radial-gradient(circle_at_70%_55%,rgba(0,149,246,0.4),transparent_50%)]" />
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, index) => (
                    <motion.span
                      key={index}
                      className="absolute h-14 w-14 rounded-full border border-white/30 bg-white/10 shadow-[0_20px_40px_-30px_rgba(24,119,242,0.6)]"
                      style={{
                        top: `${20 + index * 7}%`,
                        left: `${10 + (index % 4) * 18}%`,
                      }}
                      animate={{
                        scale: [1, 1.12, 1],
                        opacity: [0.85, 1, 0.85],
                      }}
                      transition={{
                        duration: 5 + index,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                {KPIs.map(kpi => (
                  <div key={kpi.label} className="rounded-2xl border border-white/20 bg-white/15 px-3 py-4 text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">{kpi.label}</p>
                    <p className="mt-1 text-lg font-bold">{kpi.value}</p>
                    <p className="mt-1 text-[11px] text-white/60">{kpi.hint}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <InfoCard
          icon={Radar}
          title="Dynamic clustering"
          description="Adaptive zoom ensures your view is always balanced between signal and serenity. Watch hotspots breathe in real time."
        />
        <InfoCard
          icon={Signal}
          title="Presence gradients"
          description="Aura-based overlays reveal ambient density, trending conversations, and energy shifts across the map."
        />
        <InfoCard
          icon={Waves}
          title="Seamless handoffs"
          description="Jump between local rooms, global lounges, and private spaces without losing context or momentum."
        />
      </section>
    </div>
  );
}

type InfoCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-[calc(var(--radius)*0.9)] border border-white/20 bg-white/55 p-6 shadow-[0_30px_70px_-50px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 dark:border-white/10 dark:bg-white/[0.07]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
          <p className="mt-3 text-sm text-muted-foreground/80">{description}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/80 to-[#0095F6]/60 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)]">
          <Icon className="h-5 w-5" />
        </span>
      </div>
    </motion.div>
  );
}