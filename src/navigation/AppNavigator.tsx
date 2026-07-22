import React from 'react';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../theme/colors';
import {AlibiAnalyzerScreen} from '../screens/AlibiAnalyzerScreen';
import {SavedAnalysesScreen} from '../screens/SavedAnalysesScreen';
import {DiscoveryDetailScreen} from '../screens/DiscoveryDetailScreen';
import {DossierScreen} from '../screens/DossierScreen';
import {CasesScreen} from '../screens/CasesScreen';
import {CaseDetailScreen} from '../screens/CaseDetailScreen';
import {MissingScreen} from '../screens/MissingScreen';
import {DailyScreen} from '../screens/DailyScreen';
import {SavedScreen} from '../screens/SavedScreen';
import {DeductionLabScreen} from '../screens/DeductionLabScreen';
import {CompletedChallengesScreen} from '../screens/CompletedChallengesScreen';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const icons: {[key: string]: string} = {
  Analyzer: '◉',
  Dossier: '▤',
  Cases: '▱',
  Missing: '▣',
  Daily: '✦',
};
function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#130a1f',
          borderTopColor: '#281733',
          height: 76,
          paddingTop: 8,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: colors.pink,
        tabBarInactiveTintColor: '#8d779c',
        tabBarLabelStyle: {fontSize: 10},
        tabBarIcon: ({color}) => (
          <Text style={{color, fontSize: 20}}>{icons[route.name]}</Text>
        ),
      })}>
      <Tab.Screen name="Analyzer" component={AlibiAnalyzerScreen} />
      <Tab.Screen name="Dossier" component={DossierScreen} />
      <Tab.Screen name="Cases" component={CasesScreen} />
      <Tab.Screen name="Missing" component={MissingScreen} />
      <Tab.Screen name="Daily" component={DailyScreen} />
    </Tab.Navigator>
  );
}
export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: colors.background},
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="DiscoveryDetail" component={DiscoveryDetailScreen} />
      <Stack.Screen name="Saved" component={SavedScreen} />
      <Stack.Screen name="SavedAnalyses" component={SavedAnalysesScreen} />
      <Stack.Screen name="DeductionLab" component={DeductionLabScreen} />
      <Stack.Screen
        name="CompletedChallenges"
        component={CompletedChallengesScreen}
      />
      <Stack.Screen name="CaseDetail" component={CaseDetailScreen} />
    </Stack.Navigator>
  );
}
