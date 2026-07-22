import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, GradientButton, Title} from '../components/ui';
import {challenges} from '../data/challenges';
import {colors} from '../theme/colors';
import {
  COMPLETED_CHALLENGES_KEY,
  CompletedChallenge,
} from './CompletedChallengesScreen';
export function DailyScreen({navigation}: any) {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);
  const dailyChallenge = challenges[new Date().getDate() % challenges.length];
  const submitChallenge = async () => {
    const stored = await AsyncStorage.getItem(COMPLETED_CHALLENGES_KEY);
    const current: CompletedChallenge[] = stored ? JSON.parse(stored) : [];
    const completed: CompletedChallenge = {
      ...dailyChallenge,
      response: text.trim(),
      completedAt: new Date().toISOString(),
    };
    const next = [
      completed,
      ...current.filter(item => item.id !== completed.id),
    ];
    await AsyncStorage.setItem(COMPLETED_CHALLENGES_KEY, JSON.stringify(next));
    setDone(true);
  };
  return (
    <Screen>
      <View style={s.row}>
        <View style={s.headerCopy}>
          <Title>Daily Challenge</Title>
        </View>
        <Pressable onPress={() => navigation.navigate('CompletedChallenges')}>
          <Chip>{done ? 'Completed ✓' : 'Completed'}</Chip>
        </Pressable>
      </View>
      <AnimatedEntrance>
        <Card style={s.challenge}>
          <View style={s.row}>
            <Text style={s.date}>JULY 21, 2026</Text>
            <Chip>● {dailyChallenge.difficulty}</Chip>
          </View>
          <Text style={s.title}>{dailyChallenge.title}</Text>
          <Text style={s.body}>{dailyChallenge.description}</Text>
        </Card>
      </AnimatedEntrance>
      {done ? (
        <Card style={s.success}>
          <Text style={s.green}>✓ Challenge submitted!</Text>
          <Text style={s.body}>Saved to your Completed Challenges.</Text>
        </Card>
      ) : (
        <>
          <TextInput
            value={text}
            onChangeText={setText}
            multiline
            placeholder="Write your response..."
            placeholderTextColor={colors.muted}
            style={s.input}
          />
          <GradientButton
            disabled={!text.trim()}
            label="Submit Challenge"
            onPress={submitChallenge}
          />
        </>
      )}
      <Text style={s.section}>Your journey so far</Text>
      <View style={s.grid}>
        {[
          ['8', 'Facts explored'],
          ['1', 'Cases solved'],
          ['2', 'Correct words'],
          [done ? '1' : '0', 'Challenges done'],
        ].map(x => (
          <Card key={x[1]} style={s.stat}>
            <Text style={s.number}>{x[0]}</Text>
            <Text style={s.body}>{x[1]}</Text>
          </Card>
        ))}
      </View>
      <Card style={s.streak}>
        <Text style={s.body}>Current activity streak</Text>
        <Text style={s.title}>3 days　🔥</Text>
      </Card>
    </Screen>
  );
}
const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerCopy: {flex: 1, minWidth: 0, paddingRight: 8},
  challenge: {marginTop: 20, backgroundColor: '#3b2050'},
  date: {color: colors.yellow, fontSize: 12, fontWeight: '800'},
  title: {
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginTop: 14,
  },
  body: {color: colors.muted, lineHeight: 20, marginTop: 8},
  input: {
    height: 120,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    color: colors.text,
    padding: 15,
    textAlignVertical: 'top',
    marginVertical: 14,
    backgroundColor: colors.surface,
  },
  success: {marginTop: 14, borderColor: colors.green},
  green: {color: colors.green, fontWeight: '800', textAlign: 'center'},
  section: {
    fontFamily: 'Georgia',
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    marginVertical: 19,
  },
  grid: {flexDirection: 'row', flexWrap: 'wrap', gap: 9},
  stat: {width: '48%', height: 83},
  number: {
    color: colors.pink,
    fontFamily: 'Georgia',
    fontSize: 22,
    fontWeight: '800',
  },
  streak: {marginTop: 10, borderColor: '#733653'},
});
