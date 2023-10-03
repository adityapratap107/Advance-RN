import {StyleSheet, Text, View} from 'react-native';
import React, { memo } from 'react';
import {styles} from './styles';

const ProfileName = ({title}) => {
  console.log('Profile name component called!');
  return (
    <View style={styles.userNameContainer}>
      <Text style={styles.userName}>{title}</Text>
    </View>
  );
};

export default memo(ProfileName);
