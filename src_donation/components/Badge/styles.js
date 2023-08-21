import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.colorBlue,
    height: verticalScale(50),
    // width: horizontalScale(134),
    borderRadius: 50,
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: colors.colorInactiveWhite,
  },
  inactiveTabTitle: {
    color: colors.colorGrey1,
  },
  tabTitle: {
    color: colors.white,
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
  },
});

export default styles;
