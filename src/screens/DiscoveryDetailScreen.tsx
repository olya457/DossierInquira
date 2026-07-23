import React from 'react';
import {Image, Pressable, Share, StyleSheet, Text, View} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, GradientButton, Subtitle, Title} from '../components/ui';
import {discoveries} from '../data/discoveries';
import {getDiscoveryImage} from '../assets/discoveryImages';
import {useSaved} from '../state/SavedContext';
import {colors} from '../theme/colors';
import type {DossierScreenProps} from '../navigation/types';

export function DiscoveryDetailScreen({
  route,
  navigation,
}: DossierScreenProps<'DiscoveryDetail'>) {
  const item =
    discoveries.find(x => x.id === route.params.id) ?? discoveries[0];
  const {isSaved, toggleSaved} = useSaved();
  const saved = isSaved(item.id);
  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Chip>‹ Back</Chip>
      </Pressable>
      <AnimatedEntrance>
        <View>
          <Image source={getDiscoveryImage(item.id)} style={s.image} />
          <Pressable
            onPress={() => toggleSaved(item.id)}
            style={[s.bookmark, saved && s.bookmarkActive]}>
            <Text style={s.bookmarkIcon}>{saved ? '▮' : '▯'}</Text>
            <Text style={s.bookmarkLabel}>{saved ? 'Saved' : 'Save'}</Text>
          </Pressable>
        </View>
        <Title>{item.title}</Title>
        <Text style={s.location}>{item.location}</Text>
        <Subtitle>{item.description}</Subtitle>
      </AnimatedEntrance>
      <AnimatedEntrance delay={100}>
        <Card style={s.box}>
          <Text style={s.label}>LOCATION DETAILS</Text>
          <Text style={s.body}>{item.locationDetails}</Text>
        </Card>
        <Card>
          <Text style={[s.label, {color: colors.coral}]}>
            HISTORICAL CONTEXT
          </Text>
          <Text style={s.body}>{item.historicalContext}</Text>
        </Card>
      </AnimatedEntrance>
      <View style={s.shareAction}>
        <GradientButton
          label="↗ Share this discovery"
          onPress={() =>
            Share.share({
              message: `${item.title} — ${item.location}\n${item.description}`,
            })
          }
        />
      </View>
    </Screen>
  );
}
const s = StyleSheet.create({
  shareAction: {marginTop: 18},
  image: {height: 190, width: '100%', borderRadius: 23, marginVertical: 16},
  location: {color: colors.yellow, fontWeight: '700', marginVertical: 10},
  box: {marginTop: 24, marginBottom: 10},
  label: {
    color: colors.purple,
    fontSize: 11,
    letterSpacing: 1.5,
    fontWeight: '800',
  },
  body: {color: colors.muted, lineHeight: 21, marginTop: 10},
  bookmark: {
    position: 'absolute',
    top: 28,
    right: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 20,
    paddingHorizontal: 13,
    paddingVertical: 9,
    backgroundColor: 'rgba(36,20,51,.9)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  bookmarkActive: {backgroundColor: '#6d3054', borderColor: colors.pink},
  bookmarkIcon: {color: colors.pink, fontSize: 17},
  bookmarkLabel: {color: colors.text, fontWeight: '700', fontSize: 12},
});
