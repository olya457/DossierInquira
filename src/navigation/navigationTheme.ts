import type {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../theme/colors';

export const stackScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  contentStyle: {backgroundColor: colors.background},
  animation: 'fade_from_bottom',
};

