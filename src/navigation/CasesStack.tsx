import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CaseDetailScreen} from '../screens/CaseDetailScreen';
import {CasesScreen} from '../screens/CasesScreen';
import {DeductionLabScreen} from '../screens/DeductionLabScreen';
import {stackScreenOptions} from './navigationTheme';
import type {CasesStackParamList} from './types';

const Stack = createNativeStackNavigator<CasesStackParamList>();

export function CasesStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Cases" component={CasesScreen} />
      <Stack.Screen name="CaseDetail" component={CaseDetailScreen} />
      <Stack.Screen name="DeductionLab" component={DeductionLabScreen} />
    </Stack.Navigator>
  );
}

