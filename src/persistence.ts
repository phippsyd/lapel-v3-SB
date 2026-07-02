import { useEffect, useState, useCallback } from "react";

const PREFIX = "lapel:";

export function loadState<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function saveState<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // storage full or unavailable — non-fatal, data stays in memory
  }
}

export function usePersistentState<T>(key: string, fallback: T): [T, (v: T | ((prev: T) => T)) => void] {
  const [state, setState] = useState<T>(() => loadState(key, fallback));

  useEffect(() => {
    saveState(key, state);
  }, [key, state]);

  const update = useCallback((v: T | ((prev: T) => T)) => {
    setState(prev => (typeof v === "function" ? (v as (prev: T) => T)(prev) : v));
  }, []);

  return [state, update];
}
