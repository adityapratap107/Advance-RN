import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.colorWhite2,
    paddingBottom: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postHeaderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameLocationContainer: {
    marginLeft: horizontalScale(10),
  },
  name: {
    fontFamily: 'Inter-Regular',
    color: colors.black,
    fontSize: scaleFontSize(16),
  },
  location: {
    color: colors.colorGrey1,
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
    letterSpacing: 0.12,
  },
  dotIconView: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  postImageView: {
    marginTop: verticalScale(16),
  },
  userStatsView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: verticalScale(16),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatButton: {
    marginRight: horizontalScale(27),
    flex: 1,
    flexDirection: 'row',
  },
  userPostStatText: {
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    fontFamily: 'Inter-Regular',
  },
  userPostStatIcon: {
    marginRight: 3,
    color: colors.colorGrey1,
  },
});
export default styles;
