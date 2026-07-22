import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Screen} from '../components/Screen';
import {AnimatedEntrance} from '../components/AnimatedEntrance';
import {Card, Chip, Subtitle, Title} from '../components/ui';
import {colors} from '../theme/colors';
import {discoveries} from '../data/discoveries';
import {getDiscoveryImage} from '../assets/discoveryImages';
import {useSaved} from '../state/SavedContext';

const categories = [
  'All',
  'Café Culture',
  'Dessert',
  'Coffee',
  'Chocolate',
  'Invention',
];

export function DiscoverScreen({navigation}: any) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const {savedIds, isSaved, toggleSaved} = useSaved();
  const normalizedQuery = query.trim().toLowerCase();
  const items = discoveries.filter(item => {
    const matchesCategory =
      category === 'All' ||
      item.category.toLowerCase().includes(category.toLowerCase());
    const searchable = [
      item.title,
      item.category,
      item.location,
      item.description,
    ]
      .join(' ')
      .toLowerCase();
    return matchesCategory && searchable.includes(normalizedQuery);
  });
  return (
    <Screen>
      <AnimatedEntrance>
        <View style={s.row}>
          <View style={s.headerCopy}>
            <Title>Discover</Title>
            <Subtitle>
              Sweet places, curious facts, and hidden stories.
            </Subtitle>
          </View>
          <Pressable onPress={() => navigation.navigate('Saved')}>
            <Chip>🔖 Saved · {savedIds.length}</Chip>
          </Pressable>
        </View>
      </AnimatedEntrance>
      <AnimatedEntrance delay={80}>
        <Pressable
          onPress={() =>
            navigation.navigate('CaseDetail', {
              id: 'the-ledger-beneath-the-ashes',
            })
          }
          style={s.hero}>
          <Image
            source={getDiscoveryImage(discoveries[1].id)}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={s.shade} />
          <Chip active>★ CASE OF THE WEEK</Chip>
          <View style={{flex: 1}} />
          <Text style={s.heroTitle}>The Vanishing Recipe</Text>
          <Text style={s.heroSub}>Tap to start investigating →</Text>
        </Pressable>
      </AnimatedEntrance>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="⌕  Search places or facts..."
        placeholderTextColor={colors.muted}
        style={s.search}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.chips}>
        {categories.map(item => (
          <Pressable key={item} onPress={() => setCategory(item)}>
            <Chip active={category === item}>{item}</Chip>
          </Pressable>
        ))}
      </ScrollView>
      {items.length === 0 && (
        <Text style={s.empty}>No discoveries match these filters.</Text>
      )}
      {items.map((item, i) => (
        <AnimatedEntrance key={item.id} delay={120 + i * 70}>
          <Card style={s.card}>
            <Pressable
              onPress={() =>
                navigation.navigate('DiscoveryDetail', {id: item.id})
              }>
              <Image source={getDiscoveryImage(item.id)} style={s.image} />
              <View style={s.cardBody}>
                <Chip>{item.category}</Chip>
                <Text style={s.cardTitle}>{item.title}</Text>
                <Text style={s.location}>{item.location}</Text>
                <Text style={s.body}>{item.description}</Text>
                <Text style={s.read}>Read more →</Text>
              </View>
            </Pressable>
            <Pressable
              accessibilityLabel={`${isSaved(item.id) ? 'Remove' : 'Add'} ${
                item.title
              } ${isSaved(item.id) ? 'from' : 'to'} saved`}
              onPress={() => toggleSaved(item.id)}
              style={[s.bookmark, isSaved(item.id) && s.bookmarkActive]}>
              <Text style={s.bookmarkText}>{isSaved(item.id) ? '▮' : '▯'}</Text>
            </Pressable>
          </Card>
        </AnimatedEntrance>
      ))}
    </Screen>
  );
}
const s = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerCopy: {flex: 1, minWidth: 0, paddingRight: 8},
  hero: {
    height: 166,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 18,
    padding: 15,
  },
  shade: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(18,5,26,.40)',
  },
  heroTitle: {
    color: '#fff',
    fontFamily: 'Georgia',
    fontWeight: '700',
    fontSize: 22,
  },
  heroSub: {color: '#fff', marginTop: 7},
  search: {
    height: 51,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    color: colors.text,
    paddingHorizontal: 15,
    marginTop: 16,
    backgroundColor: '#171024',
  },
  chips: {gap: 8, paddingVertical: 14, paddingRight: 18},
  empty: {color: colors.muted, textAlign: 'center', paddingVertical: 35},
  card: {padding: 0, overflow: 'hidden', marginBottom: 15},
  image: {height: 145, width: '100%'},
  cardBody: {padding: 16},
  cardTitle: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 13,
  },
  location: {
    color: colors.yellow,
    fontWeight: '700',
    fontSize: 12,
    marginTop: 7,
  },
  body: {color: colors.muted, lineHeight: 20, marginTop: 10},
  read: {color: colors.coral, fontWeight: '800', marginTop: 15},
  bookmark: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(36,20,51,.86)',
    borderWidth: 1,
    borderColor: colors.border,
  },
  bookmarkActive: {backgroundColor: '#6d3054', borderColor: colors.pink},
  bookmarkText: {color: colors.text, fontSize: 21},
});
