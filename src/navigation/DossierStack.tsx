import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CaseDetailScreen} from '../screens/CaseDetailScreen';
import {DiscoverScreen} from '../screens/DiscoverScreen';
import {DiscoveryDetailScreen} from '../screens/DiscoveryDetailScreen';
import {DossierScreen} from '../screens/DossierScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {stackScreenOptions} from './navigationTheme';
import type {DossierStackParamList} from './types';

const Stack = createNativeStackNavigator<DossierStackParamList>();

export function DossierStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name="Dossier" component={DossierScreen} />
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="DiscoveryDetail" component={DiscoveryDetailScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="CaseDetail" component={CaseDetailScreen} />
    </Stack.Navigator>
  );
}

