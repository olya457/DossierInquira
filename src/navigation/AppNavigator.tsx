import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MissingScreen} from '../screens/MissingScreen';
import {AnalysisStack} from './AnalysisStack';
import {CasesStack} from './CasesStack';
import {DailyStack} from './DailyStack';
import {DossierStack} from './DossierStack';
import {DossierTabBar} from './DossierTabBar';
import type {MainTabParamList} from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();
const renderTabBar = (props: React.ComponentProps<typeof DossierTabBar>) => (
  <DossierTabBar {...props} />
);

export function AppNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Analysis"
      screenOptions={{headerShown: false}}
      tabBar={renderTabBar}>
      <Tab.Screen name="Analysis" component={AnalysisStack} />
      <Tab.Screen name="Dossier" component={DossierStack} />
      <Tab.Screen name="Cases" component={CasesStack} />
      <Tab.Screen name="Missing" component={MissingScreen} />
      <Tab.Screen name="Daily" component={DailyStack} />
    </Tab.Navigator>
  );
}
