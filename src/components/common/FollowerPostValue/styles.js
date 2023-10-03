import {StyleSheet} from 'react-native';
import {colors} from '../../../assets/colors';
import {scaleFontSize} from '../../../assets/styles/scaling';

export const styles = StyleSheet.create({
  statValue: {
    fontSize: scaleFontSize(20),
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
    color: colors.black,
  },
});
