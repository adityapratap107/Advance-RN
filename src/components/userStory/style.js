import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
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
