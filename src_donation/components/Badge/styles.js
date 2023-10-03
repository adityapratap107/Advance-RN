import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.colorGreen,
    // height: verticalScale(22),
    padding: 2,
    // width: horizontalScale(134),
    borderRadius: 50,
    justifyContent: 'center',
  },
  badgeTitle: {
    color: colors.white,
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});

export default styles;
