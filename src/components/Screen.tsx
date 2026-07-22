import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../theme/colors';
export function Screen({
  children,
  scroll = true,
}: {
  children: React.ReactNode;
  scroll?: boolean;
}) {
  const {width, height} = useWindowDimensions();
  const compact = width <= 360 || height <= 700;
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(12)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 320,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        damping: 18,
        stiffness: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity, translateY]);

  const content = (
    <Animated.View
      style={[
        s.content,
        compact && s.compactContent,
        {opacity, transform: [{translateY}]},
      ]}>
      {children}
    </Animated.View>
  );
  return (
    <SafeAreaView style={s.safe} edges={['top', 'left', 'right']}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}
const s = StyleSheet.create({
  safe: {flex: 1, backgroundColor: colors.background},
  scroll: {flexGrow: 1, paddingBottom: 28},
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
    paddingHorizontal: 18,
    paddingTop: 14,
  },
  compactContent: {paddingHorizontal: 12, paddingTop: 9},
});
