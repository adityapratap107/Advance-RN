import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(32),
  },
  profileImage: {
    height: 120,
    width: 120,
  },

  profileStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: horizontalScale(24),
  },
  singleStatContainer: {
    paddingHorizontal: horizontalScale(18),
    marginTop: verticalScale(30),
    alignItems: 'center',
  },
  midStatValue: {
    borderRightWidth: 1,
    borderRightColor: colors.colorGrey2,
  },
  statValue: {
    fontSize: scaleFontSize(20),
    fontWeight: '600',
    fontFamily: 'Inter-Regular',
    color: colors.black,
  },
  statHeading: {
    color: colors.colorGrey1,
    fontFamily: 'Inter-Regular',
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: colors.colorGrey2,
    marginTop: verticalScale(50),
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
  incBtn: {
    height: 30,
    width: horizontalScale(100),
    borderWidth: 1,
    borderColor: colors.colorGrey1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});

export default styles;
