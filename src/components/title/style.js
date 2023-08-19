import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontWeight: '600',
    letterSpacing: 0.48,
    color: colors.blackTwo,
    fontFamily: 'Inter-Bold',
    lineHeight: verticalScale(24),
  },
});

export default styles;
