import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  donationItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(12),
  },
});

export default styles;
