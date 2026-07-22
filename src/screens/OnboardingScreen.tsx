import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../assets';
import {colors} from '../theme/colors';
const pages = [
  {
    image: images.onboardingPlaces,
    emoji: '🧁',
    title: 'Explore fascinating places',
    body: 'Wander a map of cafés, bakeries, and curious spots—each connected to a real fact, discovery, or invention worth uncovering.',
  },
  {
    image: images.onboardingCases,
    emoji: '🔎',
    title: 'Investigate short mysteries',
    body: 'Read playful detective stories and sort the evidence into True, Fake, and Unclear. Crack the case with clear thinking.',
  },
  {
    image: images.onboardingNotes,
    emoji: '🍨',
    title: 'Learn & keep your notes',
    body: 'Fill in missing words, take on a daily challenge, and save your own research notes and observations.',
  },
];
export function OnboardingScreen({onDone}: {onDone: () => void}) {
  const [index, setIndex] = useState(0);
  const {width, height} = useWindowDimensions();
  const compact = width <= 360 || height <= 700;
  const opacity = useRef(new Animated.Value(1)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const p = pages[index];

  useEffect(() => {
    opacity.setValue(0);
    translateX.setValue(24);
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.spring(translateX, {
        toValue: 0,
        damping: 18,
        stiffness: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [index, opacity, translateX]);
  return (
    <ImageBackground source={p.image} style={s.bg}>
      <LinearGradient
        colors={['transparent', 'rgba(17,6,28,.30)', colors.background]}
        locations={[0, 0.55, 1]}
        style={StyleSheet.absoluteFillObject}
      />
      <SafeAreaView style={s.safe}>
        <Pressable onPress={onDone}>
          <Text style={s.skip}>Skip</Text>
        </Pressable>
        <Animated.View
          style={[
            s.bottom,
            compact && s.compactBottom,
            {opacity, transform: [{translateX}]},
          ]}>
          <Text style={[s.emoji, compact && s.compactEmoji]}>{p.emoji}</Text>
          <Text
            numberOfLines={2}
            adjustsFontSizeToFit
            style={[s.title, compact && s.compactTitle]}>
            {p.title}
          </Text>
          <Text style={[s.body, compact && s.compactBody]}>{p.body}</Text>
          <View style={s.footer}>
            <View style={s.dots}>
              {pages.map((_, i) => (
                <View key={i} style={[s.dot, i === index && s.dotActive]} />
              ))}
            </View>
            <Pressable
              style={s.button}
              onPress={() => (index === 2 ? onDone() : setIndex(index + 1))}>
              <Text style={s.buttonText}>
                {index === 2 ? 'Start Exploring' : 'Next'}
              </Text>
            </Pressable>
          </View>
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
}
const s = StyleSheet.create({
  bg: {flex: 1},
  safe: {flex: 1, paddingHorizontal: 27},
  skip: {color: '#fff', textAlign: 'right', fontSize: 16, paddingTop: 12},
  bottom: {marginTop: 'auto', paddingBottom: 32},
  compactBottom: {paddingBottom: 14},
  emoji: {fontSize: 48},
  compactEmoji: {fontSize: 36},
  title: {
    color: '#fff',
    fontFamily: 'Georgia',
    fontSize: 28,
    fontWeight: '700',
    marginTop: 8,
  },
  compactTitle: {fontSize: 23, marginTop: 4},
  body: {color: '#f1e7ef', fontSize: 16, lineHeight: 24, marginTop: 12},
  compactBody: {fontSize: 14, lineHeight: 20, marginTop: 8},
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 28,
  },
  dots: {flexDirection: 'row', gap: 7},
  dot: {width: 8, height: 8, borderRadius: 5, backgroundColor: '#9f8a9f'},
  dotActive: {width: 25, backgroundColor: colors.pink},
  button: {
    backgroundColor: '#ff8a9d',
    borderRadius: 15,
    paddingHorizontal: 28,
    paddingVertical: 16,
  },
  buttonText: {color: '#291227', fontWeight: '800'},
});
