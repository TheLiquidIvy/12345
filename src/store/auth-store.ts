import { create } from 'zustand';

interface AuthState {
  user: any;
  isAuthenticated: boolean;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => {
    // IMPORTANT: Replace 'pixelplaque@gmail.com' with the email of the user you want to grant access.
    if (user && user.email === 'pixelplaque@gmail.com') {
      set({ user, isAuthenticated: true });
    } else {
      set({ user: null, isAuthenticated: false });
      throw new Error('Unauthorized user. Please contact support.');
    }
  },
  logout: () => set({ user: null, isAuthenticated: false }),
}));
