import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from './style';
import PropTypes from 'prop-types';
import UserProfileImage from '../common/userProfileImage';

const UserStory = props => {
  return (
    <View style={styles.container}>
      <UserProfileImage />
      <Text style={styles.name}>{props.firstName}</Text>
    </View>
  );
};

export default UserStory;
