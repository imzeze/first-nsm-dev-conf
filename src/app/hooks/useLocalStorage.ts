import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { MyStudy } from '@/app/recoil/atom';

export function useLocalStorage<T>(key: string): {
  storedValue: { [key: string]: T } | null;
  addValue: (value: { [key: string]: T }) => void;
  updateValue: (key: string, value: T) => void;
  removeValue: (key: string) => void;
  clearValue: () => void;
} {
  const [storedValue, setStoredValue] = useRecoilState(MyStudy);

  const addValue = (value: { [key: string]: T }) => {
    setStoredValue((prev) => {
      return { ...prev, ...value };
    });
  };

  const updateValue = (key: string, value: T) => {
    setStoredValue((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const removeValue = (key: string) => {
    setStoredValue((prev) => {
      if (!prev) return null;
      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const clearValue = () => {
    setStoredValue(null);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const item = window.localStorage.getItem(key);
      setStoredValue(() => (item ? JSON.parse(item) : null));
    }
  }, [key, setStoredValue]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return {
    storedValue,
    addValue,
    updateValue,
    removeValue,
    clearValue,
  };
}
