import type {SavedAnalysis} from '../../data/alibi';
import {readJson, writeJson} from './typedStorage';

const ALIBI_STORAGE_KEY = 'dossier:saved-alibi-analyses';

function isSavedAnalysis(value: unknown): value is SavedAnalysis {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const item = value as Record<string, unknown>;
  return (
    typeof item.id === 'string' &&
    typeof item.createdAt === 'string' &&
    typeof item.input === 'object' &&
    item.input !== null &&
    typeof item.result === 'object' &&
    item.result !== null
  );
}

export function readSavedAnalyses(): Promise<SavedAnalysis[]> {
  return readJson(
    ALIBI_STORAGE_KEY,
    [],
    (value): value is SavedAnalysis[] =>
      Array.isArray(value) && value.every(isSavedAnalysis),
  );
}

export function writeSavedAnalyses(items: SavedAnalysis[]): Promise<void> {
  return writeJson(ALIBI_STORAGE_KEY, items);
}

