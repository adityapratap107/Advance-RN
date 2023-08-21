import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  title1: {
    fontSize: scaleFontSize(24),
    fontFamily: 'Inter-Regular',
    lineHeight: scaleFontSize(29),
    fontWeight: '600',
  },
  title2: {
    fontSize: scaleFontSize(18),
    fontFamily: 'Inter-Regular',
    lineHeight: scaleFontSize(22),
    fontWeight: '600',
  },
  title3: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter-Regular',
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
  },
});

export default styles;
