import React, {useCallback, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {images} from '../assets';
import {Screen} from '../components/Screen';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {colors} from '../theme/colors';
import type {DailyScreenProps} from '../navigation/types';
import {
  readCompletedChallenges,
  writeCompletedChallenges,
} from '../services/storage/challengeStorage';
import type {CompletedChallenge} from '../services/storage/challengeStorage';

export function CompletedChallengesScreen({
  navigation,
}: DailyScreenProps<'CompletedChallenges'>) {
  const [items, setItems] = useState<CompletedChallenge[]>([]);

  useFocusEffect(
    useCallback(() => {
      readCompletedChallenges()
        .then(setItems)
        .catch(error => {
          console.warn('Unable to restore completed challenges', error);
          setItems([]);
        });
    }, []),
  );

  const remove = async (id: string) => {
    const next = items.filter(item => item.id !== id);
    setItems(next);
    await writeCompletedChallenges(next);
  };

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Chip>‹ Back</Chip>
      </Pressable>
      <View style={styles.header}>
        <Title>Completed Challenges</Title>
        <Subtitle>Your finished fieldwork and observations.</Subtitle>
      </View>
      {items.length === 0 ? (
        <View style={styles.empty}>
          <Image source={images.challengeEmpty} style={styles.emptyImage} />
          <Text style={styles.emptyTitle}>Nothing completed yet</Text>
          <Text style={styles.emptyText}>
            Finish today’s Daily Challenge and it will be saved here.
          </Text>
        </View>
      ) : (
        items.map(item => (
          <Card key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Chip>{item.difficulty}</Chip>
              <Text style={styles.date}>
                {new Date(item.completedAt).toLocaleDateString()}
              </Text>
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.response}>{item.response}</Text>
            <Pressable onPress={() => remove(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </Pressable>
          </Card>
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {marginTop: 18, marginBottom: 18},
  empty: {alignItems: 'center', paddingTop: 55, paddingHorizontal: 35},
  emptyImage: {width: 130, height: 90, resizeMode: 'contain'},
  emptyTitle: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 18,
  },
  emptyText: {
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
  },
  card: {marginBottom: 12},
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {color: colors.muted, fontSize: 11},
  title: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 14,
  },
  response: {color: colors.muted, lineHeight: 20, marginTop: 10},
  delete: {color: colors.red, fontWeight: '700', marginTop: 15},
});
