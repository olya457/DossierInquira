import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

const STORAGE_KEY = 'dossier:saved-discoveries';

type SavedContextValue = {
  savedIds: string[];
  ready: boolean;
  isSaved: (id: string) => boolean;
  toggleSaved: (id: string) => Promise<void>;
};

const SavedContext = createContext<SavedContextValue | null>(null);

export function SavedProvider({children}: {children: React.ReactNode}) {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(value => {
        if (value) {
          const parsed = JSON.parse(value);
          if (Array.isArray(parsed)) {
            setSavedIds(parsed.filter(id => typeof id === 'string'));
          }
        }
      })
      .catch(() => setSavedIds([]))
      .finally(() => setReady(true));
  }, []);

  const toggleSaved = useCallback(async (id: string) => {
    setSavedIds(current => {
      const next = current.includes(id)
        ? current.filter(savedId => savedId !== id)
        : [...current, id];
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      savedIds,
      ready,
      isSaved: (id: string) => savedIds.includes(id),
      toggleSaved,
    }),
    [ready, savedIds, toggleSaved],
  );

  return (
    <SavedContext.Provider value={value}>{children}</SavedContext.Provider>
  );
}

export function useSaved() {
  const context = useContext(SavedContext);
  if (!context) {
    throw new Error('useSaved must be used inside SavedProvider');
  }
  return context;
}
