import {StyleSheet} from 'react-native';
import { colors } from '../../assets/colors';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    width: '90%',
  },
  buttonView: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter-Bold',
    fontWeight: '600',
    color: colors.colorBlue3,
    textAlign: 'center',
    marginTop: verticalScale(24),
  },
  error: {
    color: 'red',
    fontSize: scaleFontSize(15),
    fontFamily: 'Inter-Regular',
  },
  success: {
    color: 'green',
    fontSize: scaleFontSize(15),
    fontFamily: 'Inter-Regular',
  },
});
export default styles;
