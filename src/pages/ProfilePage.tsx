
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { BadgeCheck, Crown, MapPin, MessageCircle, Sparkles, LogOut, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const achievements: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: 'Trailblazer',
    description: 'Joined spotlights across 12 cities this week.',
    icon: Crown,
  },
  {
    title: 'Connector',
    description: 'Hosted 4 curated lounge sessions with 500+ listeners.',
    icon: MessageCircle,
  },
  {
    title: 'Signal boost',
    description: 'Your map presence inspired 32 new explorers.',
    icon: Sparkles,
  },
];

export default function ProfilePage() {
  const { user, signInWithGoogle, signInAsGuest, signOut } = useAuth();
  const navigate = useNavigate();

  const initials = user?.name
    ?.split(' ')
    .map(part => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() ?? 'WC';

  return (
    <div className="mx-auto flex w-[min(960px,100%)] flex-col gap-12 pb-16">
      <section className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.25)] border-white/20 bg-white/55 px-8 py-12 shadow-[0_45px_120px_-55px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]">
        <div className="pointer-events-none absolute -right-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#1877F2]/18 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-[#0095F6]/20 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
            <div className="relative">
              <Avatar className="h-24 w-24 rounded-[32px] border-2 border-white/70 shadow-[0_20px_45px_-30px_rgba(24,119,242,0.7)]">
                <AvatarImage src={user?.photoURL} alt={user?.name ?? 'Explorer avatar'} />
                <AvatarFallback className="bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/70 text-lg font-semibold text-white">
                  {initials}
                </AvatarFallback>
              </Avatar>
              {user && (
                <span className="absolute -right-2 bottom-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0B1A3E] shadow-[0_6px_16px_rgba(24,119,242,0.4)]">
                  <BadgeCheck className="h-4 w-4" />
                </span>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">
                {user ? 'Premium explorer' : 'Welcome wanderer'}
              </p>
              <h2 className="text-3xl font-semibold text-foreground">
                {user ? user.name : 'Claim your space'}
              </h2>
              <p className="text-sm text-muted-foreground/80 max-w-md">
                {user
                  ? 'Craft a signature presence across the World Chat Map, maintain curated lounges, and drop-in on emerging signals.'
                  : 'Sign in to curate your profile, unlock premium lounges, and broadcast your presence effortlessly.'}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {user ? (
              <>
                <Button
                  size="lg"
                  className="premium-shadow h-12 rounded-2xl px-6 text-sm font-semibold uppercase tracking-[0.3em]"
                  onClick={() => navigate('/settings')}
                >
                  Personalize
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/50 bg-white/50 px-6 text-sm font-semibold uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/65 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={signOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="lg"
                  className="premium-shadow h-12 rounded-2xl px-6 text-sm font-semibold uppercase tracking-[0.3em]"
                  onClick={signInWithGoogle}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign in
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-2xl border-white/50 bg-white/50 px-6 text-sm font-semibold uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/65 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
                  onClick={signInAsGuest}
                >
                  Join as guest
                </Button>
              </>
            )}
          </div>
        </div>
        {user?.email && (
          <div className="relative z-10 mt-8 rounded-[calc(var(--radius)*0.9)] border border-white/30 bg-white/45 px-5 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            {user.email}
          </div>
        )}
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {achievements.map(achievement => (
          <motion.div
            key={achievement.title}
            whileHover={{ y: -6 }}
            className="group rounded-[calc(var(--radius)*0.9)] border border-white/20 bg-white/55 p-6 shadow-[0_30px_70px_-50px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/60 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)]">
                <achievement.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{achievement.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{achievement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border-white/20 bg-white/55 p-8 shadow-[0_35px_90px_-50px_rgba(24,119,242,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.04]" />
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">Presence signature</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">Current map vibes</h3>
              <p className="mt-3 text-sm text-muted-foreground/75 max-w-lg">
                Customize how others experience your drops. Set your discovery trails, lounge availability, and privacy halos instantly.
              </p>
            </div>
            <div className="rounded-[calc(var(--radius)*0.8)] border border-white/20 bg-white/40 px-6 py-5 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Preferred orbit</span>
              </div>
              <p className="mt-3 font-semibold">Neo Tokyo • Ghost friendly</p>
              <p className="mt-1 text-xs text-muted-foreground/70">Auto-refreshing every 5 minutes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border-white/20 bg-gradient-to-br from-[#1877F2]/25 via-[#0095F6]/20 to-transparent p-8 text-white shadow-[0_35px_90px_-45px_rgba(24,119,242,0.55)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]" />
          <div className="relative z-10 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">Rewards</p>
            <h3 className="text-2xl font-semibold leading-tight">Unlock premium vibes faster.</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Earn aurora tokens as your presence grows.</li>
              <li>• Host three lounge sessions to unlock holo skins.</li>
              <li>• Co-host with another premium explorer for collab boosts.</li>
            </ul>
            <Button
              variant="ghost"
              className="w-full rounded-xl border border-white/30 bg-white/10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-white/20"
              onClick={() => navigate('/lounge')}
            >
              View lounge boosts
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}