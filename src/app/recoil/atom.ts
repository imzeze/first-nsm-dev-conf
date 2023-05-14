import { atom } from 'recoil';

export const MyStudy = atom<{ [key: string]: any } | null>({
  key: 'MyStudy',
  default: null,
});
