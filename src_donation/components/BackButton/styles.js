import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorWhite3,
    height: verticalScale(44),
    width: 44,
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
