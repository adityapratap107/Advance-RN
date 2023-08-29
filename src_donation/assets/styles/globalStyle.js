import {StyleSheet} from 'react-native';
import {colors} from '../colors';
import { verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    flex: 1,
    backgroundColor: colors.white,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
