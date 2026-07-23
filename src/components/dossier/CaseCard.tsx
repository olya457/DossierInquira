import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import type {InvestigationCase} from '../../domain/cases/models';
import {colors} from '../../theme/colors';
import {EvidenceCard} from './EvidenceCard';

export function CaseCard({
  investigationCase,
  onPress,
}: {
  investigationCase: InvestigationCase;
  onPress: () => void;
}) {
  return (
    <Pressable accessibilityRole="button" onPress={onPress}>
      <EvidenceCard style={styles.card}>
        <Text style={styles.title}>{investigationCase.title}</Text>
        <Text style={styles.body}>{investigationCase.story}</Text>
        <Text style={styles.meta}>
          {investigationCase.difficulty} · {investigationCase.category} ·{' '}
          {investigationCase.time}
        </Text>
      </EvidenceCard>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {marginBottom: 12},
  title: {
    fontFamily: 'Georgia',
    fontWeight: '700',
    fontSize: 18,
    color: colors.text,
  },
  body: {color: colors.muted, lineHeight: 19, marginTop: 12},
  meta: {color: colors.purple, fontSize: 11, marginTop: 14},
});

