import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {AppNavigator} from './src/navigation/AppNavigator';
import {colors} from './src/theme/colors';
import {SavedProvider} from './src/state/SavedContext';
import {
  hasCompletedOnboarding,
  markOnboardingCompleted,
} from './src/services/storage/onboardingStorage';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [seen, setSeen] = useState<boolean | null>(null);
  useEffect(() => {
    Promise.all([
      hasCompletedOnboarding().catch(error => {
        console.warn('Unable to restore onboarding state', error);
        return false;
      }),
      new Promise(resolve => setTimeout(resolve, 1500)),
    ]).then(([completed]) => {
      setSeen(completed);
      setLoading(false);
    });
  }, []);

  const done = async () => {
    try {
      await markOnboardingCompleted();
    } catch (error) {
      console.warn('Unable to save onboarding state', error);
    }
    setSeen(true);
  };
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      {loading ? (
        <LoadingScreen />
      ) : !seen ? (
        <OnboardingScreen onDone={done} />
      ) : (
        <NavigationContainer>
          <SavedProvider>
            <AppNavigator />
          </SavedProvider>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}
