import { useEffect, useState } from 'react';

export function useLocalStorage<T>(key: string): {
  storedValue: { [key: string]: T } | null;
  addValue: (value: { [key: string]: T }) => void;
  updateValue: (key: string, value: T) => void;
  removeValue: (key: string) => void;
  clearValue: () => void;
} {
  const [storedValue, setStoredValue] = useState<{ [key: string]: T } | null>(
    () => {
      if (typeof window === 'undefined') {
        return null;
      }
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    },
  );

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
