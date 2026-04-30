import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItem(key: string): Promise<string | null> {
  return AsyncStorage.getItem(key);
}

export async function setItem(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}

export async function removeItem(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}

// Sync read — only works on web (where AsyncStorage is backed by localStorage).
// On native, returns null and callers should fall back to async hydration.
// Used at module-init time to avoid a flash of un-hydrated state on web.
export function getItemSync(key: string): string | null {
  try {
    if (typeof window !== 'undefined' && (window as any).localStorage) {
      return (window as any).localStorage.getItem(key);
    }
  } catch {}
  return null;
}
