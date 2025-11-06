
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { MapPin, Globe, MessageCircle, Video, Shield, Moon, Sun, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  const navigate = useNavigate();
  const { user, signInWithGoogle, signInAsGuest } = useAuth();
  const { t, toggleLanguage, language } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-8 h-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">World Chat Map</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage}>
              <Languages className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            {user && (
              <Button onClick={() => navigate('/map')}>
                {t('enterMap')}
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {t('heroTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('heroSubtitle')}
          </p>
          
          {!user ? (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" onClick={signInWithGoogle} className="min-w-[200px]">
                <Globe className="w-5 h-5 mr-2" />
                {t('signInGoogle')}
              </Button>
              <Button size="lg" variant="outline" onClick={signInAsGuest} className="min-w-[200px]">
                {t('continueGuest')}
              </Button>
            </div>
          ) : (
            <div className="flex gap-4 justify-center pt-8">
              <Button size="lg" onClick={() => navigate('/map')}>
                <MapPin className="w-5 h-5 mr-2" />
                {t('localMap')}
              </Button>
              <Button size="lg" variant="secondary" onClick={() => navigate('/lounge')}>
                <Globe className="w-5 h-5 mr-2" />
                {t('globalLounge')}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
          {t('features')}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            icon={<MapPin className="w-8 h-8" />}
            title={t('featureLocalChat')}
            description={t('featureLocalChatDesc')}
          />
          <FeatureCard
            icon={<Globe className="w-8 h-8" />}
            title={t('featureGlobalLounge')}
            description={t('featureGlobalLoungeDesc')}
          />
          <FeatureCard
            icon={<Video className="w-8 h-8" />}
            title={t('featureVideoCalls')}
            description={t('featureVideoCallsDesc')}
          />
          <FeatureCard
            icon={<MessageCircle className="w-8 h-8" />}
            title={t('featureRichChat')}
            description={t('featureRichChatDesc')}
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title={t('featureGhostMode')}
            description={t('featureGhostModeDesc')}
          />
          <FeatureCard
            icon={<Languages className="w-8 h-8" />}
            title={t('featureMultiLang')}
            description={t('featureMultiLangDesc')}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 World Chat Map. {t('allRightsReserved')}</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}