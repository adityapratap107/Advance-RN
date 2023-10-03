import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { styles } from './styles';

const FollowValue = ({value}) => {
  console.log('follow value component called!');
  return (
    <View>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  );
};

export default FollowValue;

