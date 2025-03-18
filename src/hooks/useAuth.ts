import { useUserStore } from '@/store/authState';

export function useAuth() {
  const { user } = useUserStore();
  return user ? true : false;
}
