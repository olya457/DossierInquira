import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, GradientButton, Title} from '../components/ui';
import {missingWords} from '../data/missingWords';
import {colors} from '../theme/colors';
import {evaluateMissingWord} from '../domain/missingWords/evaluateMissingWord';
export function MissingScreen() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<boolean | null>(null);
  const [hint, setHint] = useState(false);
  const p = missingWords[index];
  const submit = () => setResult(evaluateMissingWord(input, p.answer));
  const next = () => {
    setIndex((index + 1) % missingWords.length);
    setInput('');
    setResult(null);
    setHint(false);
  };
  return (
    <Screen>
      <Title>Missing Word</Title>
      <View style={s.stats}>
        <Card style={s.stat}>
          <Text style={s.green}>2</Text>
          <Text style={s.small}>Correct</Text>
        </Card>
        <Card style={s.stat}>
          <Text style={s.white}>{index + 1}</Text>
          <Text style={s.small}>Attempts</Text>
        </Card>
        <Card style={s.stat}>
          <Text style={s.coral}>67%</Text>
          <Text style={s.small}>Accuracy</Text>
        </Card>
      </View>
      <AnimatedEntrance>
        <Card style={s.main}>
          <Text style={s.label}>FILL THE BLANK</Text>
          <Text style={s.sentence}>{p.statement}</Text>
          {hint && <Text style={s.hint}>💡 {p.hint}</Text>}
          <TextInput
            value={input}
            onChangeText={t => {
              setInput(t);
              setResult(null);
            }}
            placeholder="Type your answer..."
            placeholderTextColor={colors.muted}
            autoCapitalize="none"
            style={[
              s.input,
              result === true && s.correct,
              result === false && s.wrong,
            ]}
          />
          {result !== null && (
            <Text
              style={[s.feedback, {color: result ? colors.green : colors.red}]}>
              {result
                ? '✓ Correct! Well spotted, detective.'
                : `× Not quite — answer: ${p.answer}`}
            </Text>
          )}
          <View style={s.actions}>
            <Pressable onPress={() => setHint(true)} style={s.hintBtn}>
              <Text style={s.white}>Hint</Text>
            </Pressable>
            <View style={s.submitAction}>
              <GradientButton label="Submit Answer" onPress={submit} />
            </View>
          </View>
        </Card>
      </AnimatedEntrance>
      <Pressable style={s.next} onPress={next}>
        <Text style={s.white}>↻ Generate New Statement</Text>
      </Pressable>
    </Screen>
  );
}
const s = StyleSheet.create({
  submitAction: {flex: 1},
  stats: {flexDirection: 'row', gap: 8, marginVertical: 20},
  stat: {flex: 1, alignItems: 'center', padding: 12},
  green: {color: colors.green, fontSize: 18, fontWeight: '800'},
  coral: {color: colors.coral, fontSize: 18, fontWeight: '800'},
  white: {color: colors.text, fontWeight: '700'},
  small: {color: colors.muted, fontSize: 10, marginTop: 4},
  main: {padding: 20},
  label: {
    color: colors.purple,
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: '800',
  },
  sentence: {
    fontFamily: 'Georgia',
    fontSize: 21,
    lineHeight: 30,
    color: colors.text,
    marginVertical: 16,
  },
  hint: {
    color: colors.yellow,
    backgroundColor: '#483340',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    color: colors.text,
    padding: 14,
  },
  correct: {borderColor: colors.green},
  wrong: {borderColor: colors.red},
  feedback: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#3c3046',
    marginTop: 10,
  },
  actions: {flexDirection: 'row', gap: 9, marginTop: 15},
  hintBtn: {
    paddingHorizontal: 20,
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: colors.surfaceAlt,
  },
  next: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 18,
    alignItems: 'center',
    marginTop: 14,
  },
});
