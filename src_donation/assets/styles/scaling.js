import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidlineBasedWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidlineBasedheight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const guidelineBasedFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = size => (width / guidlineBasedWidth()) * size;
const verticalScale = size => (height / guidlineBasedheight()) * size;
const scaleFontSize = size =>
  Math.round((size * width) / guidelineBasedFonts());

export {horizontalScale, verticalScale, scaleFontSize};
