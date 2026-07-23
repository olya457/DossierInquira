import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AlibiAnalyzerScreen} from '../screens/AlibiAnalyzerScreen';
import {SavedAnalysesScreen} from '../screens/SavedAnalysesScreen';
import {stackScreenOptions} from './navigationTheme';
import type {AnalysisStackParamList} from './types';

const Stack = createNativeStackNavigator<AnalysisStackParamList>();

export function AnalysisStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Analyzer" component={AlibiAnalyzerScreen} />
      <Stack.Screen name="SavedAnalyses" component={SavedAnalysesScreen} />
    </Stack.Navigator>
  );
}

