import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import Header from '../Header';
import styles from './styles';
import {colors} from '../../assets/colors';

const SingleDonationItem = props => {
  return (
    <View>
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
        />
        <View style={styles.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={colors.colorBlue3}
          />
        </View>
      </View>
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
export default SingleDonationItem;
