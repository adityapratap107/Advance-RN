import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

const ProfileTabTitle = props => {
  return (
    <View>
      <Text
        style={[
          styles.title,
          {
            color: props.isFocused ? '#022150' : '#79869f',
            fontWeight: props.isFocused ? '500' : '400'
        },
        ]}>
        {props.title}
      </Text>
    </View>
  );
};

ProfileTabTitle.PropTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
export default ProfileTabTitle;
