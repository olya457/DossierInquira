import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  readSavedDiscoveryIds,
  writeSavedDiscoveryIds,
} from '../services/storage/savedDiscoveriesStorage';

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
    readSavedDiscoveryIds()
      .then(setSavedIds)
      .catch(error => {
        console.warn('Unable to restore saved discoveries', error);
        setSavedIds([]);
      })
      .finally(() => setReady(true));
  }, []);

  const toggleSaved = useCallback(async (id: string) => {
    setSavedIds(current => {
      const next = current.includes(id)
        ? current.filter(savedId => savedId !== id)
        : [...current, id];
      writeSavedDiscoveryIds(next).catch(error => {
        console.warn('Unable to save discoveries', error);
      });
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
