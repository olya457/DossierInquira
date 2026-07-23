import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageError} from './typedStorage';

const ONBOARDING_KEY = 'dossier:onboarded';

export async function hasCompletedOnboarding(): Promise<boolean> {
  try {
    const storedValue = await AsyncStorage.getItem(ONBOARDING_KEY);
    return storedValue === 'yes' || storedValue === 'true';
  } catch (cause) {
    throw new StorageError(
      'Unable to restore onboarding state',
      ONBOARDING_KEY,
      cause,
    );
  }
}

export async function markOnboardingCompleted(): Promise<void> {
  try {
    await AsyncStorage.setItem(ONBOARDING_KEY, 'yes');
  } catch (cause) {
    throw new StorageError(
      'Unable to save onboarding state',
      ONBOARDING_KEY,
      cause,
    );
  }
}
