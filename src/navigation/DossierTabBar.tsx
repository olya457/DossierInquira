import React from 'react';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import type {MainTabParamList} from './types';

type TabName = keyof MainTabParamList;

const labels: Record<TabName, string> = {
  Analysis: 'Analyzer',
  Dossier: 'Dossier',
  Cases: 'Cases',
  Missing: 'Missing',
  Daily: 'Daily',
};

function TabGlyph({name, active}: {name: TabName; active: boolean}) {
  return (
    <View style={[styles.glyph, active && styles.activeGlyph]}>
      <View style={[styles.glyphCore, styles[`${name}Glyph`]]} />
    </View>
  );
}

export function DossierTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const name = route.name as TabName;
        const active = state.index === index;
        const options = descriptors[route.key].options;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!active && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={active ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={() =>
              navigation.emit({type: 'tabLongPress', target: route.key})
            }
            style={styles.item}>
            <TabGlyph name={name} active={active} />
            <Text style={[styles.label, active && styles.activeLabel]}>
              {labels[name]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 76,
    paddingTop: 8,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#130a1f',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#281733',
  },
  item: {
    flex: 1,
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  glyph: {
    width: 25,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.muted,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeGlyph: {
    borderColor: colors.pink,
    backgroundColor: '#4a203d',
  },
  glyphCore: {backgroundColor: colors.muted},
  activeLabel: {color: colors.pink},
  label: {color: '#8d779c', fontSize: 10},
  AnalysisGlyph: {width: 9, height: 9, borderRadius: 5},
  DossierGlyph: {width: 11, height: 13, borderRadius: 2},
  CasesGlyph: {width: 13, height: 9, borderRadius: 2},
  MissingGlyph: {width: 10, height: 10, transform: [{rotate: '45deg'}]},
  DailyGlyph: {width: 12, height: 3, borderRadius: 2},
});

