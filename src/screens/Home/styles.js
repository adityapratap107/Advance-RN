import {StyleSheet} from 'react-native';
import { colors } from '../../assets/colors';
import { horizontalScale, scaleFontSize, verticalScale } from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: verticalScale(30),
    padding: horizontalScale(26),
  },
  messageIcon: {
    backgroundColor: colors.colorWhite,
    height: verticalScale(48),
    width: horizontalScale(44),
    borderRadius: horizontalScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  countContainer: {
    backgroundColor: colors.pink,
    height: verticalScale(10),
    width: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(12),
  },
  msgCount: {
    fontSize: scaleFontSize(6),
    fontFamily: 'Inter-Regular',
    color: colors.white,
    fontWeight: '600',
  },
  storyView: {
    marginLeft: horizontalScale(24),
    // height: 100,
  },
  userPostContainer: {
    marginTop: verticalScale(30),
    height: '100%',
    paddingHorizontal: horizontalScale(4),
  },
});

export default styles;
