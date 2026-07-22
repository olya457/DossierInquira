import React from 'react';
import {Pressable, StyleSheet, Text, View, ViewStyle} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../theme/colors';

export const Title = ({children}: {children: React.ReactNode}) => (
  <Text style={s.title}>{children}</Text>
);
export const Subtitle = ({children}: {children: React.ReactNode}) => (
  <Text style={s.subtitle}>{children}</Text>
);
export const Card = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: ViewStyle;
}) => <View style={[s.card, style]}>{children}</View>;
export const Chip = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => (
  <View style={[s.chip, active && s.chipActive]}>
    <Text style={[s.chipText, active && {color: '#24102a'}]}>{children}</Text>
  </View>
);
export function GradientButton({
  label,
  onPress,
  disabled,
}: {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [{opacity: disabled ? 0.45 : pressed ? 0.8 : 1}]}>
      <LinearGradient
        colors={[colors.pink, colors.coral]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={s.button}>
        <Text style={s.buttonText}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const s = StyleSheet.create({
  title: {
    color: colors.text,
    fontFamily: 'Georgia',
    fontWeight: '700',
    fontSize: 27,
    lineHeight: 34,
  },
  subtitle: {color: colors.muted, fontSize: 14, lineHeight: 21, marginTop: 5},
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 20,
    padding: 17,
  },
  chip: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.surface,
  },
  chipActive: {backgroundColor: '#ff8bad', borderColor: '#ff8bad'},
  chipText: {color: colors.text, fontSize: 12},
  button: {
    minHeight: 52,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  buttonText: {fontWeight: '800', color: '#261126', fontSize: 15},
});
