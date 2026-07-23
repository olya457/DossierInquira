import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../theme/colors';

export function DossierTitle({children}: {children: React.ReactNode}) {
  return <Text style={styles.title}>{children}</Text>;
}

export function DossierSubtitle({children}: {children: React.ReactNode}) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 34,
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 5,
  },
});

