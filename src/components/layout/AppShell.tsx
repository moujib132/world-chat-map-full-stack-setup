import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Home, Globe, UserRound, Settings, Plus, Languages, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useMemo } from 'react';

const navItems = [
  {
    path: '/',
    label: 'Home',
    icon: Home,
  },
  {
    path: '/map',
    label: 'Map',
    icon: MapPin,
  },
  {
    path: '/lounge',
    label: 'Lounge',
    icon: Globe,
  },
  {
    path: '/profile',
    label: 'Profile',
    icon: UserRound,
  },
  {
    path: '/settings',
    label: 'Settings',
    icon: Settings,
  },
];

export default function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signInWithGoogle, signInAsGuest } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  const currentBottomNavLabel = useMemo(() => {
    const current = navItems.find(item => item.path === location.pathname);
    return current?.label ?? t('explore');
  }, [location.pathname, t]);

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="aurora" aria-hidden />

      <header className="sticky top-4 z-40 mx-auto w-[min(960px,94%)] overflow-hidden rounded-[calc(var(--radius)*1.1)] border border-white/10 bg-white/50 px-6 py-4 shadow-[0_45px_100px_-50px_rgba(24,119,242,0.55)] backdrop-blur-2xl transition-all duration-500 dark:border-white/5 dark:bg-white/5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1877F2] via-[#0095F6] to-[#1877F2] text-white shadow-[0_12px_35px_-20px_rgba(24,119,242,0.9)]">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">World chat</p>
              <h1 className="text-xl font-semibold text-foreground">Map Collective</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10" onClick={toggleLanguage} aria-label={t('switchLanguage')}>
              <Languages className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-xl hover:bg-primary/10" onClick={toggleTheme} aria-label={t('toggleTheme')}>
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            {!user ? (
              <div className="hidden sm:flex items-center gap-2">
                <Button size="sm" className="rounded-xl px-4 py-2" onClick={signInWithGoogle}>
                  {t('signInGoogle')}
                </Button>
                <Button size="sm" variant="outline" className="rounded-xl px-4 py-2" onClick={signInAsGuest}>
                  {t('continueGuest')}
                </Button>
              </div>
            ) : (
              <Button className="rounded-xl px-4 py-2" onClick={() => navigate('/map')}>
                {t('enterMap')}
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10 flex flex-1 justify-center px-4 pb-32 pt-8 sm:pb-36">
        <div className="w-[min(960px,100%)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="min-h-[calc(100vh-260px)]"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center pb-24">
        <motion.div
          key={currentBottomNavLabel}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.65, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="rounded-full bg-gradient-to-tr from-[#1877F2]/40 via-[#0095F6]/30 to-transparent px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-white"
        >
          {currentBottomNavLabel}
        </motion.div>
      </div>

      <nav className="fixed bottom-6 left-1/2 z-50 w-[min(520px,92%)] -translate-x-1/2">
        <div className="glass-panel flex items-center justify-between gap-1 rounded-[calc(var(--radius)*1.05)] border-white/20 bg-white/70 p-2 shadow-[0_35px_80px_-45px_rgba(24,119,242,0.65)] transition-colors duration-500 dark:border-white/5 dark:bg-black/45">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'group relative flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-[11px] font-medium tracking-wide transition-all duration-300 ease-out',
                  isActive
                    ? 'text-foreground'
                    : 'text-foreground/60 hover:text-foreground'
                ].join(' ')
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={[
                      'relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300',
                      isActive
                        ? 'bg-gradient-to-br from-[#1877F2] via-[#0095F6] to-[#1877F2] text-white shadow-[0_20px_45px_-30px_rgba(24,119,242,0.8)]'
                        : 'bg-white/60 text-foreground/80 shadow-inner dark:bg-white/10 dark:text-white/70'
                    ].join(' ')}
                  >
                    <item.icon className="h-[20px] w-[20px]" />
                  </span>
                  <motion.span
                    layout
                    className="relative"
                    animate={{
                      opacity: isActive ? 1 : 0.65,
                      letterSpacing: isActive ? '0.22em' : '0.12em',
                    }}
                    transition={{ duration: 0.4, ease: [0.32, 1, 0.68, 1] }}
                  >
                    {item.label.toUpperCase()}
                  </motion.span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 h-[3px] w-8 rounded-full bg-gradient-to-r from-[#1877F2] via-[#0095F6] to-[#1877F2] shadow-[0_6px_16px_rgba(24,119,242,0.45)]"
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => navigate('/lounge')}
        className="group fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#1877F2] via-[#0095F6] to-[#1877F2] p-[1px] shadow-[0_25px_45px_-25px_rgba(24,119,242,0.75)] transition-transform focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1877F2]/30"
        aria-label={t('globalLounge')}
      >
        <div className="flex items-center gap-2 rounded-full bg-black/70 px-6 py-3 pr-7 text-white backdrop-blur-3xl dark:bg-black/60">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:rotate-12">
            <Plus className="h-5 w-5" />
          </span>
          <div className="text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">{t('globalLounge')}</p>
            <p className="text-sm font-semibold">{t('startNewVibe')}</p>
          </div>
        </div>
      </motion.button>
    </div>
  );
}
