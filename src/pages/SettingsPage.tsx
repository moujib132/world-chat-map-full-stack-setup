
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Shield, Bell, Radio, Palette, Globe, Languages, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const toggles = [
  {
    title: 'Ambient notifications',
    description: 'Get gentle pulses when nearby lounges heat up.',
    icon: Bell,
    id: 'notifications',
  },
  {
    title: 'Presence broadcasting',
    description: 'Share your orbit radius and vibe automatically.',
    icon: Radio,
    id: 'presence',
  },
  {
    title: 'Concierge assist',
    description: 'Allow premium hosts to invite you into curated sessions.',
    icon: Sparkles,
    id: 'concierge',
  },
];

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage } = useLanguage();

  return (
    <div className="mx-auto flex w-[min(960px,100%)] flex-col gap-12 pb-16">
      <section className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.25)] border-white/20 bg-white/55 px-8 py-12 shadow-[0_45px_120px_-55px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]">
        <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-[#1877F2]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#0095F6]/20 blur-3xl" />
        <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80 backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
              Control centre
            </div>
            <h2 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Tailor your premium experience.
            </h2>
            <p className="max-w-xl text-lg text-muted-foreground/80">
              Fine-tune presence visibility, adjust ambient cues, and personalize how the map responds to your unique flow.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-[calc(var(--radius)*0.9)] border border-white/25 bg-white/50 p-4 text-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10 md:w-80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-foreground/75">
                <Palette className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]">Theme</span>
              </div>
              <Button
                variant="ghost"
                className="h-9 rounded-lg border border-white/40 bg-white/20 px-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground hover:bg-white/35 dark:border-white/10 dark:bg-white/10 dark:text-white"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? 'light' : 'dark'}
              </Button>
            </div>
            <Separator className="my-2 border-white/30 dark:border-white/10" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-foreground/75">
                <Languages className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-[0.3em]">Language</span>
              </div>
              <Button
                variant="ghost"
                className="h-9 rounded-lg border border-white/40 bg-white/20 px-4 text-xs font-semibold uppercase tracking-[0.35em] text-foreground hover:bg-white/35 dark:border-white/10 dark:bg-white/10 dark:text-white"
                onClick={toggleLanguage}
              >
                Switch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border-white/20 bg-white/55 p-8 shadow-[0_35px_90px_-50px_rgba(24,119,242,0.45)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-white/[0.04]" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground/70">Safety layers</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">Ghost mode control</h3>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/60 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)]">
                <Shield className="h-5 w-5" />
              </span>
            </div>
            <p className="text-sm text-muted-foreground/75">
              Dial how visible you appear on the map. Toggle between precise, halo, or ephemeral presence in seconds.
            </p>
              <div className="grid gap-4 rounded-[calc(var(--radius)*0.8)] border border-white/20 bg-white/45 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
                <div className="flex items-center justify-between text-sm text-foreground/80">
                  <span>Precision orbit</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/80">
                  <span>Ghost halo</span>
                  <Switch />
                </div>
                <div className="flex items-center justify-between text-sm text-foreground/80">
                  <span>Auto-fade after 10 min</span>
                  <Switch />
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ y: -4 }}
          className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.1)] border-white/20 bg-gradient-to-br from-[#1877F2]/25 via-[#0095F6]/18 to-transparent p-8 text-white shadow-[0_35px_90px_-45px_rgba(24,119,242,0.55)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]" />
          <div className="relative z-10 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">Discovery</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight">Curate your invitations</h3>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white shadow-[0_18px_35px_-20px_rgba(0,0,0,0.5)]">
                <Globe className="h-5 w-5" />
              </span>
            </div>
            <p className="text-sm text-white/75">
              Prioritize lounge invites based on your vibe, languages, and community tiers. Adjust in real time without leaving the map.
            </p>
            <div className="grid gap-3 text-sm text-white/80">
              <label className="flex items-center justify-between rounded-xl border border-white/25 bg-white/10 px-4 py-3">
                <span>Premium lounges</span>
                <Switch defaultChecked />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-white/25 bg-white/10 px-4 py-3">
                <span>Local pop-ups</span>
                <Switch />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-white/25 bg-white/10 px-4 py-3">
                <span>Collaborator pings</span>
                <Switch defaultChecked />
              </label>
            </div>
            <Button
              variant="ghost"
              className="w-full rounded-xl border border-white/30 bg-white/10 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white hover:bg-white/20"
            >
              Manage preferences
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {toggles.map(toggle => (
          <motion.div
            key={toggle.id}
            whileHover={{ y: -6 }}
            className="group rounded-[calc(var(--radius)*0.9)] border border-white/20 bg-white/55 p-6 shadow-[0_30px_70px_-50px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 hover:border-white/40 dark:border-white/10 dark:bg-white/[0.07]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{toggle.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground/80">{toggle.description}</p>
              </div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2]/85 to-[#0095F6]/60 text-white shadow-[0_18px_35px_-20px_rgba(24,119,242,0.75)]">
                <toggle.icon className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-foreground/75">
              <span>Enabled</span>
              <Switch defaultChecked />
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}