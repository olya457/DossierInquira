import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {getDiscoveryImage} from '../assets/discoveryImages';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {discoveries} from '../data/discoveries';
import {useSaved} from '../state/SavedContext';
import {colors} from '../theme/colors';

export function SavedScreen({navigation}: any) {
  const {savedIds, toggleSaved} = useSaved();
  const savedItems = discoveries.filter(item => savedIds.includes(item.id));

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Chip>‹ Back</Chip>
      </Pressable>
      <View style={styles.header}>
        <Title>Saved Files</Title>
        <Subtitle>{savedItems.length} discoveries in your dossier</Subtitle>
      </View>

      {savedItems.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyIcon}>🔖</Text>
          <Text style={styles.emptyTitle}>No saved discoveries</Text>
          <Text style={styles.emptyText}>
            Tap the bookmark on any discovery to keep it here.
          </Text>
        </View>
      ) : (
        savedItems.map((item, index) => (
          <AnimatedEntrance key={item.id} delay={index * 60}>
            <Card style={styles.card}>
              <Pressable
                style={styles.cardContent}
                onPress={() =>
                  navigation.navigate('DiscoveryDetail', {id: item.id})
                }>
                <Image
                  source={getDiscoveryImage(item.id)}
                  style={styles.image}
                />
                <View style={styles.info}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                  <Text numberOfLines={2} style={styles.description}>
                    {item.description}
                  </Text>
                </View>
              </Pressable>
              <Pressable
                accessibilityLabel={`Remove ${item.title} from saved`}
                onPress={() => toggleSaved(item.id)}
                style={styles.bookmark}>
                <Text style={styles.bookmarkText}>▮</Text>
              </Pressable>
            </Card>
          </AnimatedEntrance>
        ))
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {marginTop: 18, marginBottom: 20},
  empty: {alignItems: 'center', paddingTop: 80, paddingHorizontal: 30},
  emptyIcon: {fontSize: 52},
  emptyTitle: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontSize: 21,
    fontWeight: '700',
    marginTop: 16,
  },
  emptyText: {color: colors.muted, textAlign: 'center', marginTop: 10},
  card: {padding: 12, marginBottom: 12},
  cardContent: {flexDirection: 'row', paddingRight: 30},
  image: {width: 76, height: 76, borderRadius: 14},
  info: {flex: 1, marginLeft: 12},
  title: {color: colors.text, fontFamily: 'Georgia', fontWeight: '700'},
  location: {color: colors.yellow, fontSize: 11, marginTop: 5},
  description: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 7,
  },
  bookmark: {position: 'absolute', top: 12, right: 12, padding: 7},
  bookmarkText: {color: colors.pink, fontSize: 20},
});
