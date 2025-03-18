import { atom } from 'recoil';

export interface User {
  domain: string;
  apiKey: string;
  email: string;
}

export const authState = atom<User | null>({
  key: 'authState',
  default: null,
});
