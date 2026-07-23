import {isStringArray, readJson, writeJson} from './typedStorage';

const SAVED_DISCOVERIES_KEY = 'dossier:saved-discoveries';

export function readSavedDiscoveryIds(): Promise<string[]> {
  return readJson(SAVED_DISCOVERIES_KEY, [], isStringArray);
}

export function writeSavedDiscoveryIds(ids: string[]): Promise<void> {
  return writeJson(SAVED_DISCOVERIES_KEY, ids);
}

