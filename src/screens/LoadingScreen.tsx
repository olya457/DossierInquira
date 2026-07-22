import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {images} from '../assets';
import {colors} from '../theme/colors';

export function LoadingScreen() {
  const logoScale = useRef(new Animated.Value(0.86)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(logoScale, {
        toValue: 1,
        damping: 11,
        stiffness: 90,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, {
          toValue: 1,
          duration: 650,
          useNativeDriver: true,
        }),
        Animated.timing(pulse, {
          toValue: 0,
          duration: 650,
          useNativeDriver: true,
        }),
      ]),
    );
    loop.start();
    return () => loop.stop();
  }, [logoOpacity, logoScale, pulse]);

  const activeDotScale = pulse.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.25],
  });

  return (
    <ImageBackground
      source={images.loader}
      resizeMode="cover"
      style={styles.background}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <Animated.View
          style={[
            styles.logoWrap,
            {
              opacity: logoOpacity,
              transform: [{scale: logoScale}],
            },
          ]}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
        </Animated.View>

        <View style={styles.loadingBlock}>
          <View style={styles.dots}>
            <View style={[styles.dot, styles.pinkDot]} />
            <Animated.View
              style={[
                styles.dot,
                styles.yellowDot,
                {transform: [{scale: activeDotScale}]},
              ]}
            />
            <View style={[styles.dot, styles.purpleDot]} />
          </View>
          <Text style={styles.caption}>Gathering the clues...</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {flex: 1, backgroundColor: colors.background},
  safeArea: {flex: 1, alignItems: 'center'},
  logoWrap: {
    position: 'absolute',
    top: '14.5%',
    width: '84%',
    maxWidth: 330,
    aspectRatio: 292 / 145,
  },
  logo: {width: '100%', height: '100%'},
  loadingBlock: {
    position: 'absolute',
    bottom: '4.8%',
    alignItems: 'center',
  },
  dots: {flexDirection: 'row', gap: 9, alignItems: 'center'},
  dot: {width: 9, height: 9, borderRadius: 5},
  pinkDot: {backgroundColor: '#ff65b0'},
  yellowDot: {backgroundColor: '#ffd25d'},
  purpleDot: {backgroundColor: '#c596e8'},
  caption: {
    color: '#d5cad8',
    fontSize: 13,
    letterSpacing: 2.2,
    marginTop: 23,
  },
});
