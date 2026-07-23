import AsyncStorage from '@react-native-async-storage/async-storage';
import {readJson, writeJson} from '../src/services/storage/typedStorage';
import {
  hasCompletedOnboarding,
  markOnboardingCompleted,
} from '../src/services/storage/onboardingStorage';

jest.mock('@react-native-async-storage/async-storage', () => ({
  __esModule: true,
  default: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
  },
}));

const storage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('typed storage', () => {
  beforeEach(() => jest.clearAllMocks());

  it('returns validated data', async () => {
    storage.getItem.mockResolvedValueOnce('["case-1"]');
    await expect(
      readJson(
        'saved',
        [],
        (value): value is string[] =>
          Array.isArray(value) &&
          value.every(item => typeof item === 'string'),
      ),
    ).resolves.toEqual(['case-1']);
  });

  it('removes data that has an unexpected shape', async () => {
    storage.getItem.mockResolvedValueOnce('{"broken":true}');
    await expect(
      readJson('saved', [], (value): value is string[] =>
        Array.isArray(value),
      ),
    ).resolves.toEqual([]);
    expect(storage.removeItem).toHaveBeenCalledWith('saved');
  });

  it('serializes writes', async () => {
    await writeJson('saved', ['case-1']);
    expect(storage.setItem).toHaveBeenCalledWith('saved', '["case-1"]');
  });

  it('preserves the existing onboarding value format', async () => {
    storage.getItem.mockResolvedValueOnce('yes');
    await expect(hasCompletedOnboarding()).resolves.toBe(true);

    await markOnboardingCompleted();
    expect(storage.setItem).toHaveBeenCalledWith('dossier:onboarded', 'yes');
  });
});
