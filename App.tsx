import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {OnboardingScreen} from './src/screens/OnboardingScreen';
import {LoadingScreen} from './src/screens/LoadingScreen';
import {AppNavigator} from './src/navigation/AppNavigator';
import {colors} from './src/theme/colors';
import {SavedProvider} from './src/state/SavedContext';
export default function App() {
  const [loading, setLoading] = useState(true);
  const [seen, setSeen] = useState<boolean | null>(null);
  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem('dossier:onboarded'),
      new Promise(r => setTimeout(r, 1500)),
    ]).then(([v]) => {
      setSeen(v === 'yes');
      setLoading(false);
    });
  }, []);
  const done = () => {
    AsyncStorage.setItem('dossier:onboarded', 'yes');
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
