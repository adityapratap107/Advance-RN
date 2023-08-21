import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.colorBlue,
    height: verticalScale(55),
    width: horizontalScale(327),
    borderRadius: 50,
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: colors.colorBlue,
    opacity: 0.5,
    height: verticalScale(55),
    width: horizontalScale(327),
    borderRadius: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});

export default styles;
