
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Globe, MessageCircle, Video, Shield, Languages, Sparkles, Users, Radio, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroHighlights = [
  { label: 'Latency', value: '<120ms', hint: 'Ultra-fast presence updates' },
  { label: 'Languages', value: '24+', hint: 'Instant locale switching' },
  { label: 'Communities', value: '120K', hint: 'Curated discovery streams' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signInAsGuest } = useAuth();
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      title: t('featureLocalChat'),
      description: t('featureLocalChatDesc'),
      accent: 'from-[#1877F2]/30 via-[#0095F6]/15 to-transparent',
    },
    {
      icon: Globe,
      title: t('featureGlobalLounge'),
      description: t('featureGlobalLoungeDesc'),
      accent: 'from-[#0095F6]/25 via-[#1877F2]/15 to-transparent',
    },
    {
      icon: Video,
      title: t('featureVideoCalls'),
      description: t('featureVideoCallsDesc'),
      accent: 'from-[#1877F2]/28 via-[#0095F6]/10 to-transparent',
    },
    {
      icon: MessageCircle,
      title: t('featureRichChat'),
      description: t('featureRichChatDesc'),
      accent: 'from-[#0095F6]/35 via-[#1877F2]/18 to-transparent',
    },
    {
      icon: Shield,
      title: t('featureGhostMode'),
      description: t('featureGhostModeDesc'),
      accent: 'from-[#000000]/45 via-[#1A1A1A]/30 to-transparent',
    },
    {
      icon: Languages,
      title: t('featureMultiLang'),
      description: t('featureMultiLangDesc'),
      accent: 'from-[#0095F6]/32 via-[#1877F2]/18 to-transparent',
    },
  ];

  return (
    <div className="relative space-y-24 pb-32">
      <div className="floating pointer-events-none absolute -left-24 top-10 h-56 w-56 rounded-full bg-[#1877F2]/15 blur-3xl" />
      <div
        className="floating pointer-events-none absolute -right-12 top-1/4 h-40 w-40 rounded-full bg-[#0095F6]/20 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      <section className="relative overflow-hidden rounded-[calc(var(--radius)*1.25)] border border-white/15 bg-white/60 px-6 py-16 shadow-[0_45px_120px_-55px_rgba(24,119,242,0.45)] backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-white/[0.05] md:px-12 lg:px-16">
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-[#0095F6]/25 blur-3xl" />
        <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-[#1877F2]/25 blur-3xl" />

        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.35em] text-foreground/80 shadow-[0_15px_35px_-25px_rgba(24,119,242,0.6)] backdrop-blur-xl dark:border-white/20 dark:bg-white/10">
              Premium Surface
            </span>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-br from-[#1877F2] via-[#0095F6] to-[#1877F2] bg-clip-text text-transparent">
                  {t('heroTitle')}
                </span>
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground/80 sm:text-xl">
                {t('heroSubtitle')} Experience glassmorphism, live gradients, and refined motion crafted for explorers.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              {!user ? (
                <>
                  <Button size="lg" className="premium-shadow h-14 rounded-2xl px-8 text-base font-semibold tracking-wide" onClick={signInWithGoogle}>
                    <Globe className="mr-2 h-5 w-5" />
                    {t('signInGoogle')}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 rounded-2xl border-white/50 bg-white/50 px-8 text-base font-semibold tracking-wide shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/70 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/20"
                    onClick={signInAsGuest}
                  >
                    {t('continueGuest')}
                  </Button>
                </>
              ) : (
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" className="premium-shadow h-14 rounded-2xl px-8 text-base font-semibold tracking-wide" onClick={() => navigate('/map')}>
                    <MapPin className="mr-2 h-5 w-5" />
                    {t('localMap')}
                  </Button>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="h-14 rounded-2xl px-8 text-base font-semibold tracking-wide shadow-[0_14px_30px_-20px_rgba(0,149,246,0.65)]"
                    onClick={() => navigate('/lounge')}
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    {t('globalLounge')}
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border-white/20 bg-white/55 p-6 shadow-[0_35px_90px_-50px_rgba(24,119,242,0.5)] dark:border-white/10 dark:bg-white/[0.08]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.06]" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground/80">Live Stage</p>
                    <p className="mt-1 text-2xl font-semibold text-foreground">Global Presence</p>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/80 to-[#0095F6]/60 text-white shadow-[0_14px_35px_-20px_rgba(24,119,242,0.8)]">
                    <Sparkles className="h-5 w-5" />
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center text-sm text-foreground/90">
                  {heroHighlights.map(item => (
                    <div key={item.label} className="rounded-2xl border border-white/30 bg-white/30 px-3 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.08]">
                      <p className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground/70">{item.label}</p>
                      <p className="mt-1 text-lg font-semibold text-foreground">{item.value}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground">{item.hint}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-3xl border border-white/25 bg-black/70 p-5 text-left text-white shadow-[0_20px_45px_-30px_rgba(24,119,242,0.75)] backdrop-blur-2xl dark:bg-black/65">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">Next stop</p>
                  <p className="mt-2 text-lg font-semibold">Immersive map sessions</p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                    <Users className="h-4 w-4" />
                    <span>122 explorers tuning in now</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="mt-6 h-11 rounded-xl border border-white/30 bg-white/10 px-4 text-white hover:bg-white/20"
                    onClick={() => navigate('/map')}
                  >
                    Navigate the pulse
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {t('features')}
          </h3>
          <Button
            variant="ghost"
            className="hidden items-center gap-2 rounded-2xl border border-white/40 bg-white/40 px-4 py-2 text-sm font-semibold tracking-wide text-foreground shadow-[0_12px_25px_-18px_rgba(24,119,242,0.5)] hover:bg-white/60 dark:border-white/10 dark:bg-white/5 md:inline-flex"
            onClick={() => navigate('/settings')}
          >
            <Compass className="h-4 w-4" />
            Personalize your space
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(feature => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.15)] border-white/20 bg-white/55 p-10 shadow-[0_35px_90px_-50px_rgba(24,119,242,0.45)] dark:border-white/10 dark:bg-white/[0.07]">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.04]" />
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">Immersive experiences</p>
                <p className="mt-2 text-3xl font-semibold text-foreground">Stay in flow, worldwide</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <ExperienceTile
                title="Local pulses"
                description="Hyper-local map rooms with contextual overlays and real-time reactions."
                icon={Radio}
                actionLabel="Enter map"
                onAction={() => navigate('/map')}
              />
              <ExperienceTile
                title="Global lounge"
                description="Fluid lounges with threads, drops, and immersive video handoffs."
                icon={Globe}
                actionLabel="Join lounge"
                onAction={() => navigate('/lounge')}
              />
              <ExperienceTile
                title="Secure modes"
                description="Intelligent privacy shields, ghost positioning, and ephemeral layers."
                icon={Shield}
                actionLabel="Review safety"
                onAction={() => navigate('/settings')}
              />
              <ExperienceTile
                title="Cultural sync"
                description="Realtime translation, localized suggestions, and curated playlists."
                icon={Languages}
                actionLabel="Switch language"
                onAction={() => navigate('/settings')}
              />
            </div>
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.15)] border-white/20 bg-gradient-to-br from-[#1877F2]/25 via-[#0095F6]/20 to-transparent p-8 text-white shadow-[0_35px_90px_-45px_rgba(24,119,242,0.6)] backdrop-blur-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
          <div className="relative z-10 space-y-6">
            <p className="text-xs uppercase tracking-[0.45em] text-white/70">World chat map</p>
            <h4 className="text-3xl font-semibold leading-tight">The premium atlas for human connection.</h4>
            <p className="text-sm text-white/75">
              Experience a reimagined map-first community surface crafted with glass morphism, dynamic gradients, and micro-interactions that feel like magic.
            </p>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">1</span>
                Concierge onboarding with customizable presence states.
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">2</span>
                Ambient threads, smooth transitions, and tactile feedback.
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs font-semibold">3</span>
                Integrated lounge drops, live Spaces, and collaborative layers.
              </li>
            </ul>
            <Button
              size="lg"
              className="h-14 w-full rounded-2xl bg-white/90 text-base font-semibold tracking-wide text-[#0B1A3E] shadow-[0_25px_45px_-30px_rgba(0,0,0,0.45)] hover:bg-white/95"
              onClick={() => navigate('/profile')}
            >
              Build your profile
            </Button>
          </div>
        </div>
      </section>

      <footer className="mx-auto w-[min(960px,94%)] rounded-[calc(var(--radius)*1.1)] border border-white/20 bg-white/50 px-6 py-8 text-center text-sm text-muted-foreground shadow-[0_25px_75px_-50px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
        <p>&copy; 2025 World Chat Map. {t('allRightsReserved')}</p>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

function FeatureCard({ icon: Icon, title, description, accent }: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group relative overflow-hidden rounded-[calc(var(--radius)*0.95)] border border-white/20 bg-white/55 p-6 shadow-[0_30px_65px_-45px_rgba(24,119,242,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      <div className="relative z-10 flex flex-col gap-5">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-lg transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 dark:bg-white/[0.08] dark:text-white">
          <Icon className="h-5 w-5" />
        </span>
        <div className="space-y-2">
          <h4 className="text-xl font-semibold tracking-tight text-foreground">{title}</h4>
          <p className="text-sm leading-relaxed text-muted-foreground/80">{description}</p>
        </div>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/60">
          Explore
          <span className="h-[1px] flex-1 bg-gradient-to-r from-[#1877F2]/40 to-transparent" />
        </div>
      </div>
    </motion.article>
  );
}

type ExperienceTileProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  actionLabel: string;
  onAction: () => void;
};

function ExperienceTile({ title, description, icon: Icon, actionLabel, onAction }: ExperienceTileProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group rounded-[calc(var(--radius)*0.85)] border border-white/20 bg-white/60 p-5 shadow-[0_20px_55px_-45px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 dark:border-white/10 dark:bg-white/[0.08]"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h5 className="text-lg font-semibold tracking-tight text-foreground">{title}</h5>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground/80">{description}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/65 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)] transition-transform duration-500 group-hover:-translate-y-1">
          <Icon className="h-5 w-5" />
        </span>
      </div>
      <Button
        variant="ghost"
        className="mt-6 h-11 rounded-xl border border-white/40 bg-white/20 px-4 text-xs font-semibold uppercase tracking-[0.3em] text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-white/35 dark:border-white/10 dark:bg-white/[0.08] dark:text-white"
        onClick={onAction}
      >
        {actionLabel}
      </Button>
    </motion.div>
  );
}