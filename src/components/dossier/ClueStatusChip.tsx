import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme/colors';

export type ClueStatus = 'True' | 'Fake' | 'Unclear';

export function ClueStatusChip({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <View style={[styles.chip, active && styles.activeChip]}>
      <Text style={[styles.text, active && styles.activeText]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.surface,
  },
  activeChip: {
    backgroundColor: colors.pink,
    borderColor: colors.pink,
  },
  text: {color: colors.text, fontSize: 12},
  activeText: {color: '#24102a'},
});

