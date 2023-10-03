import PropTypes from 'prop-types';
import {Image, Pressable, View} from 'react-native';
import {colors} from '../../assets/colors';
import Badge from '../Badge';
import Header from '../Header';
import styles from './styles';

const SingleDonationItem = props => {
  return (
    <Pressable onPress={() => props.onPress(props.donationItemId)}>
      <View>
        <View style={styles.badgeView}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="contain"
          source={{uri: props.uri}}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={colors.colorBlack3}
          numberOfLines={1}
        />
        <View style={styles.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={colors.colorBlue3}
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};
export default SingleDonationItem;
