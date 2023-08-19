import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileTabPostContainer: {
    flex: 1,
    paddingVertical: verticalScale(10),
    backgroundColor: colors.white,
  },
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(21),
    justifyContent: 'space-between',
  },
  imageUpcomingRowContainer: {
    marginTop: verticalScale(6),
  },
  image: {
    maxWidth: horizontalScale(136),
    maxHeight: verticalScale(90),
  },
  lastImageContainer: {
    marginBottom: verticalScale(96),
  }
});

export default styles;
