import {StyleSheet} from 'react-native';
import { colors } from '../../assets/colors';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  label: {
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    color: colors.colorGrey5,
    // marginTop: 24,
  },
  input: {
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter-Regular',
    fontWeight: '500',
    color: colors.colorGrey5,
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.colorLineGrey,
  },
});
export default styles;
