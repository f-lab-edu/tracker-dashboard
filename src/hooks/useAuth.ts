import { authState } from '@/store/authState';
import { useRecoilValue } from 'recoil';

export function useAuth() {
  const user = useRecoilValue(authState);
  return user ? true : false;
}
