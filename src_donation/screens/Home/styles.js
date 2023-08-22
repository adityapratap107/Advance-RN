import {StyleSheet} from 'react-native';
import { colors } from '../../assets/colors';
import {horizontalScale, scaleFontSize, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(21),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    marginTop: verticalScale(5),
  },
  headerIntroText: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
    fontWeight: '400',
    color: colors.colorGrey4,
  },
  searchBox: {
    marginTop: verticalScale(20),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
    marginTop: verticalScale(16),
  },
  donationItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(33),
  },
});

export default styles;
