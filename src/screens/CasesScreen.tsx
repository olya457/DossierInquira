import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {cases} from '../data/cases';
import {colors} from '../theme/colors';
import {CaseCard} from '../components/dossier/CaseCard';
import type {CasesScreenProps} from '../navigation/types';

export function CasesScreen({navigation}: CasesScreenProps<'Cases'>) {
  return (
    <Screen>
      <View style={s.row}>
        <View style={s.headerCopy}>
          <Title>Case Files</Title>
          <Subtitle>Sort the evidence, crack the case.</Subtitle>
        </View>
        <Pressable onPress={() => navigation.navigate('DeductionLab')}>
          <Chip>♙ Deduction Lab</Chip>
        </Pressable>
      </View>
      <View style={s.stats}>
        <Card style={s.stat}>
          <Text style={s.green}>1</Text>
          <Text style={s.small}>Solved</Text>
        </Card>
        <Card style={s.stat}>
          <Text style={s.yellow}>1</Text>
          <Text style={s.small}>In progress</Text>
        </Card>
        <Card style={s.stat}>
          <Text style={s.coral}>100%</Text>
          <Text style={s.small}>Accuracy</Text>
        </Card>
      </View>
      {cases.map((c, i) => (
        <AnimatedEntrance key={c.id} delay={i * 80}>
          <CaseCard
            investigationCase={c}
            onPress={() => navigation.navigate('CaseDetail', {id: c.id})}
          />
        </AnimatedEntrance>
      ))}
    </Screen>
  );
}
const s = StyleSheet.create({
  row: {flexDirection: 'row', justifyContent: 'space-between', gap: 8},
  headerCopy: {flex: 1, minWidth: 0},
  stats: {flexDirection: 'row', gap: 8, marginVertical: 18},
  stat: {flex: 1, alignItems: 'center', padding: 12},
  green: {color: colors.green, fontSize: 18, fontWeight: '800'},
  yellow: {color: colors.yellow, fontSize: 18, fontWeight: '800'},
  coral: {color: colors.coral, fontSize: 18, fontWeight: '800'},
  small: {color: colors.muted, fontSize: 10, marginTop: 4},
});
