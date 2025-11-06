
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email?: string;
  photoURL?: string;
  isGuest: boolean;
}

interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  signInWithPhone: (phone: string) => Promise<void>;
  signInAsGuest: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = async () => {
    // Firebase Google Auth placeholder
    setUser({
      id: 'demo-user-1',
      name: 'Demo User',
      email: 'demo@example.com',
      photoURL: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      isGuest: false,
    });
  };

  const signInWithPhone = async (phone: string) => {
    // Firebase Phone Auth placeholder
    setUser({
      id: 'demo-user-2',
      name: phone,
      isGuest: false,
    });
  };

  const signInAsGuest = async () => {
    setUser({
      id: 'guest-' + Date.now(),
      name: 'Guest User',
      isGuest: true,
    });
  };

  const signOut = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle, signInWithPhone, signInAsGuest, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}