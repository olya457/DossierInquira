import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme/colors';

type DetectiveButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export function DetectiveButton({
  label,
  onPress,
  disabled = false,
}: DetectiveButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      disabled={disabled}
      style={({pressed}) => [
        styles.pressable,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ]}>
      <LinearGradient
        colors={[colors.pink, colors.coral]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.button}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {opacity: 1},
  disabled: {opacity: 0.45},
  pressed: {opacity: 0.8},
  button: {
    minHeight: 52,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  label: {fontWeight: '800', color: '#261126', fontSize: 15},
});

