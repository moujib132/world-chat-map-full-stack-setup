import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Compass, MapPin, Sparkles } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto flex w-[min(860px,100%)] flex-col items-center gap-10 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel relative overflow-hidden rounded-[calc(var(--radius)*1.2)] border-white/20 bg-white/60 px-10 py-16 text-center shadow-[0_45px_120px_-55px_rgba(24,119,242,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]"
      >
        <div className="pointer-events-none absolute -left-16 top-12 h-64 w-64 rounded-full bg-[#1877F2]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#0095F6]/18 blur-3xl" />
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-foreground/80 backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            Lost in the atlas
          </span>
          <h1 className="text-6xl font-semibold tracking-tight text-foreground">404</h1>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground/80">
            Looks like you drifted into an uncharted coordinate. Let’s pulse you back to the premium surface.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="premium-shadow h-12 rounded-2xl px-6 text-sm font-semibold uppercase tracking-[0.3em]"
              onClick={() => navigate('/')}
            >
              <Compass className="mr-2 h-4 w-4" />
              Back home
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-2xl border-white/50 bg-white/55 px-6 text-sm font-semibold uppercase tracking-[0.3em] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-xl hover:bg-white/70 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/15"
              onClick={() => navigate('/map')}
            >
              <MapPin className="mr-2 h-4 w-4" />
              Explore map
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-3 rounded-[calc(var(--radius)*0.9)] border border-white/20 bg-white/55 px-6 py-5 text-sm text-foreground shadow-[0_25px_60px_-45px_rgba(24,119,242,0.55)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.07]"
      >
        <Sparkles className="h-5 w-5 text-[#0095F6]" />
        <p className="text-center text-sm text-muted-foreground/80">
          Tip: Save your favourite lounges and maps to avoid losing your bearings next time.
        </p>
      </motion.div>
    </div>
  );
};

export default NotFound;
