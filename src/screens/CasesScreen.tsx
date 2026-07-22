import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {cases} from '../data/cases';
import {colors} from '../theme/colors';
export function CasesScreen({navigation}: any) {
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
          <Pressable
            onPress={() => navigation.navigate('CaseDetail', {id: c.id})}>
            <Card style={s.card}>
              <Text style={s.title}>{c.title}</Text>
              <Text style={s.body}>{c.story}</Text>
              <Text style={s.meta}>
                ● {c.difficulty}　 {c.category}　 ◷ {c.time}
              </Text>
            </Card>
          </Pressable>
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
