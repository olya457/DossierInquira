import React, {useMemo, useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {Screen} from '../components/Screen';
import {Card, Chip, GradientButton, Subtitle, Title} from '../components/ui';
import {colors} from '../theme/colors';
import type {CasesScreenProps} from '../navigation/types';

const factors = [
  {name: 'Source reliability', description: 'How trustworthy is the source?'},
  {name: 'Corroboration', description: 'Do independent clues support it?'},
  {name: 'Motive fit', description: 'Does it match a plausible motive?'},
  {name: 'Consistency', description: 'Does it fit the timeline?'},
];

export function DeductionLabScreen({
  navigation,
}: CasesScreenProps<'DeductionLab'>) {
  const [tab, setTab] = useState<'confidence' | 'cipher'>('confidence');
  const [scores, setScores] = useState([65, 50, 40, 55]);
  const [message, setMessage] = useState('Meet at the bakery at dawn');
  const [shift, setShift] = useState(3);
  const confidence = Math.round(
    scores.reduce((total, score) => total + score, 0) / scores.length,
  );
  const cipher = useMemo(
    () =>
      message.replace(/[a-z]/gi, character => {
        const base = character === character.toUpperCase() ? 65 : 97;
        return String.fromCharCode(
          ((character.charCodeAt(0) - base + shift + 26) % 26) + base,
        );
      }),
    [message, shift],
  );

  const changeScore = (index: number, amount: number) =>
    setScores(current =>
      current.map((score, itemIndex) =>
        itemIndex === index
          ? Math.max(0, Math.min(100, score + amount))
          : score,
      ),
    );

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Chip>‹ Back</Chip>
      </Pressable>
      <View style={styles.header}>
        <Title>Deduction Lab</Title>
        <Subtitle>Weigh clue confidence or encode a secret message.</Subtitle>
      </View>
      <View style={styles.tabs}>
        <Pressable
          style={[styles.tab, tab === 'confidence' && styles.activeTab]}
          onPress={() => setTab('confidence')}>
          <Text style={styles.tabText}>Clue Confidence</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, tab === 'cipher' && styles.activeTab]}
          onPress={() => setTab('cipher')}>
          <Text style={styles.tabText}>Secret Cipher</Text>
        </Pressable>
      </View>

      {tab === 'confidence' ? (
        <>
          <Card style={styles.scoreCard}>
            <Text style={styles.scoreLabel}>CLUE CONFIDENCE</Text>
            <Text style={styles.score}>{confidence}%</Text>
            <Text style={styles.verdict}>
              {confidence >= 75
                ? 'STRONG'
                : confidence >= 50
                ? 'INCONCLUSIVE'
                : 'WEAK'}
            </Text>
          </Card>
          {factors.map((factor, index) => (
            <Card key={factor.name} style={styles.factor}>
              <View style={styles.factorHeader}>
                <View style={styles.factorCopy}>
                  <Text style={styles.factorTitle}>{factor.name}</Text>
                  <Text style={styles.factorDescription}>
                    {factor.description}
                  </Text>
                </View>
                <Text style={styles.factorScore}>{scores[index]}</Text>
              </View>
              <View style={styles.controls}>
                <Pressable
                  style={styles.control}
                  onPress={() => changeScore(index, -5)}>
                  <Text style={styles.controlText}>−</Text>
                </Pressable>
                <View style={styles.track}>
                  <View
                    style={[
                      styles.fill,
                      {width: `${scores[index]}%` as `${number}%`},
                    ]}
                  />
                </View>
                <Pressable
                  style={styles.control}
                  onPress={() => changeScore(index, 5)}>
                  <Text style={styles.controlText}>＋</Text>
                </Pressable>
              </View>
            </Card>
          ))}
          <GradientButton
            label="Reset to 50%"
            onPress={() => setScores([50, 50, 50, 50])}
          />
        </>
      ) : (
        <Card>
          <Text style={styles.fieldLabel}>MESSAGE</Text>
          <TextInput
            value={message}
            onChangeText={setMessage}
            multiline
            style={styles.input}
            placeholder="Enter a secret message"
            placeholderTextColor={colors.muted}
          />
          <View style={styles.shiftRow}>
            <Text style={styles.fieldLabel}>CIPHER KEY</Text>
            <View style={styles.shiftControls}>
              <Pressable
                style={styles.control}
                onPress={() => setShift(Math.max(1, shift - 1))}>
                <Text style={styles.controlText}>−</Text>
              </Pressable>
              <Text style={styles.shift}>Shift {shift}</Text>
              <Pressable
                style={styles.control}
                onPress={() => setShift(Math.min(25, shift + 1))}>
                <Text style={styles.controlText}>＋</Text>
              </Pressable>
            </View>
          </View>
          <Text style={styles.fieldLabel}>RESULT</Text>
          <View style={styles.result}>
            <Text selectable style={styles.resultText}>
              {cipher || 'Your encoded message will appear here.'}
            </Text>
          </View>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {marginTop: 18},
  tabs: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 4,
    marginVertical: 18,
  },
  tab: {flex: 1, padding: 12, borderRadius: 10, alignItems: 'center'},
  activeTab: {backgroundColor: colors.pink},
  tabText: {color: colors.text, fontWeight: '700', fontSize: 12},
  scoreCard: {alignItems: 'center', marginBottom: 12},
  scoreLabel: {color: colors.purple, fontSize: 11, letterSpacing: 1.4},
  score: {color: colors.yellow, fontSize: 43, fontWeight: '800', marginTop: 8},
  verdict: {color: colors.yellow, fontSize: 10, fontWeight: '800'},
  factor: {marginBottom: 10},
  factorHeader: {flexDirection: 'row', justifyContent: 'space-between'},
  factorCopy: {flex: 1, minWidth: 0, paddingRight: 8},
  factorTitle: {color: colors.text, fontWeight: '700'},
  factorDescription: {color: colors.muted, fontSize: 11, marginTop: 5},
  factorScore: {color: colors.pink, fontWeight: '800'},
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 13,
  },
  control: {
    width: 36,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    backgroundColor: colors.surfaceAlt,
  },
  controlText: {color: colors.text, fontSize: 18, fontWeight: '700'},
  track: {flex: 1, height: 6, borderRadius: 4, backgroundColor: '#160d21'},
  fill: {height: 6, borderRadius: 4, backgroundColor: colors.pink},
  fieldLabel: {
    color: colors.purple,
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  input: {
    minHeight: 90,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    padding: 13,
    textAlignVertical: 'top',
    marginBottom: 18,
  },
  shiftRow: {marginBottom: 18},
  shiftControls: {flexDirection: 'row', alignItems: 'center', gap: 12},
  shift: {color: colors.text, fontWeight: '700'},
  result: {
    minHeight: 65,
    borderRadius: 13,
    padding: 14,
    backgroundColor: '#160d21',
    borderWidth: 1,
    borderColor: '#5d4931',
  },
  resultText: {color: colors.yellow, lineHeight: 21},
});
