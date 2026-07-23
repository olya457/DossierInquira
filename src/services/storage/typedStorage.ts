import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageError extends Error {
  constructor(
    message: string,
    public readonly key: string,
    public readonly originalCause?: unknown,
  ) {
    super(message);
    this.name = 'StorageError';
  }
}

export async function readJson<T>(
  key: string,
  fallback: T,
  validate: (value: unknown) => value is T,
): Promise<T> {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (raw === null) {
      return fallback;
    }
    const parsed: unknown = JSON.parse(raw);
    if (!validate(parsed)) {
      await AsyncStorage.removeItem(key);
      return fallback;
    }
    return parsed;
  } catch (cause) {
    throw new StorageError(`Unable to read stored value "${key}"`, key, cause);
  }
}

export async function writeJson<T>(key: string, value: T): Promise<void> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (cause) {
    throw new StorageError(`Unable to save value "${key}"`, key, cause);
  }
}

export const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(item => typeof item === 'string');
