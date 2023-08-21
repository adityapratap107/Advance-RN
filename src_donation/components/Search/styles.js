import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.colorInactiveWhite,
    marginHorizontal: horizontalScale(24),
    borderRadius: 15,
    height: verticalScale(50),
  },
  searchIcon: {
    paddingLeft: horizontalScale(16),
  },
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    fontFamily: 'Inter-Regular',
    color: colors.colorGrey3,
  },
});

export default styles;
