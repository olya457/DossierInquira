import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, GradientButton, Subtitle, Title} from '../components/ui';
import {cases} from '../data/cases';
import {colors} from '../theme/colors';
const choices = ['True', 'Fake', 'Unclear'];
export function CaseDetailScreen({route, navigation}: any) {
  const c = cases.find(x => x.id === route.params?.id) || cases[0];
  const [examining, setExamining] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checked, setChecked] = useState(false);
  if (checked)
    return (
      <Screen>
        <Text style={s.check}>✓</Text>
        <Title>Case Solved!</Title>
        <Subtitle>Every clue filed correctly. Nicely done, detective.</Subtitle>
        <Card style={{marginTop: 22}}>
          <Text style={s.label}>THE SOLUTION</Text>
          <Text style={s.body}>{c.solution}</Text>
        </Card>
        <View style={{marginTop: 18}}>
          <GradientButton
            label="All cases"
            onPress={() => navigation.goBack()}
          />
        </View>
      </Screen>
    );
  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Chip>‹ Back</Chip>
      </Pressable>
      {!examining ? (
        <AnimatedEntrance>
          <View style={{marginTop: 16}}>
            <Chip active>● {c.difficulty}</Chip>
            <Title>{c.title}</Title>
            <Card style={s.card}>
              <Text style={s.label}>THE STORY</Text>
              <Text style={s.body}>{c.story}</Text>
            </Card>
            <Card style={s.card}>
              <Text style={s.label}>THE QUESTION</Text>
              <Text style={s.question}>{c.question}</Text>
            </Card>
            <GradientButton
              label="⌕ Examine Evidence"
              onPress={() => setExamining(true)}
            />
          </View>
        </AnimatedEntrance>
      ) : (
        <>
          <Title>Sort the Evidence</Title>
          <Subtitle>Tag each clue as True, Fake, or Unclear.</Subtitle>
          {c.clues.map((clue, i) => (
            <Card key={i} style={s.card}>
              <Text style={s.body}>{clue.text}</Text>
              <View style={s.choices}>
                {choices.map(x => (
                  <Pressable
                    key={x}
                    onPress={() => setAnswers({...answers, [i]: x})}
                    style={[s.choice, answers[i] === x && s.selected]}>
                    <Text style={s.choiceText}>{x}</Text>
                  </Pressable>
                ))}
              </View>
            </Card>
          ))}
          <GradientButton
            disabled={Object.keys(answers).length < c.clues.length}
            label="Check Answers"
            onPress={() => setChecked(true)}
          />
        </>
      )}
    </Screen>
  );
}
const s = StyleSheet.create({
  card: {marginVertical: 8},
  label: {
    color: colors.yellow,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.3,
  },
  body: {color: colors.muted, lineHeight: 20, marginTop: 10},
  question: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontStyle: 'italic',
    lineHeight: 22,
    marginTop: 10,
  },
  choices: {flexDirection: 'row', gap: 7, marginTop: 14},
  choice: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 9,
    padding: 10,
    alignItems: 'center',
  },
  selected: {backgroundColor: '#4a3655', borderColor: colors.green},
  choiceText: {color: colors.text, fontSize: 12},
  check: {
    color: colors.green,
    fontSize: 54,
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 20,
  },
});
