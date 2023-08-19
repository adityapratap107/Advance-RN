import {StyleSheet} from 'react-native';
import { horizontalScale, scaleFontSize, verticalScale } from '../../../assets/styles/scaling';
import {colors} from '../../assets/colors';

const styles = StyleSheet.create({
  container: {
    marginRight: horizontalScale(20),
  },
  name: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    color: colors.black,
    fontSize: scaleFontSize(14),
    marginTop: verticalScale(8),
  },
});
export default styles;
