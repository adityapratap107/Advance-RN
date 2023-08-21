import {StyleSheet} from 'react-native';
import {colors} from '../../assets/colors';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  image: {
    height: verticalScale(170),
    width: horizontalScale(155),
    borderRadius: 20,
  },
  badgeView: {
    position: 'absolute',
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 1,
  },
  donationInformation: {
    marginTop: verticalScale(16)
  },
  price: {
    marginTop: verticalScale(5),
  }
});

export default styles;
