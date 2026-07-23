import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompletedChallengesScreen} from '../screens/CompletedChallengesScreen';
import {DailyScreen} from '../screens/DailyScreen';
import {stackScreenOptions} from './navigationTheme';
import type {DailyStackParamList} from './types';

const Stack = createNativeStackNavigator<DailyStackParamList>();

export function DailyStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Daily" component={DailyScreen} />
      <Stack.Screen
        name="CompletedChallenges"
        component={CompletedChallengesScreen}
      />
    </Stack.Navigator>
  );
}

