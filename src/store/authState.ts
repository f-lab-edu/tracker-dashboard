import { create } from 'zustand';

export interface User {
  domain: string;
  apiKey: string;
  email: string;
}

export interface AuthStateType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useUserStore = create<AuthStateType>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
