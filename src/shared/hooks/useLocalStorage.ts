import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(key);
    const initial = saved !== null ? JSON.parse(saved) : defaultValue;
    return initial;
  }
  return defaultValue;
}

const useLocalStorage = <T>(key: string, defaultValue: any) => {
  const storage = localStorage;
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    storage.setItem(key, JSON.stringify(value));
  }, [defaultValue, key, storage, value]);

  useEffect(() => {
    setValue(getStorageValue(key, defaultValue));
  }, [defaultValue, key, storage]);

  return [value, setValue] as const;
};

export default useLocalStorage;
