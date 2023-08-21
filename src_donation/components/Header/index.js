import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };
  return (
    <View>
      <Text style={styleToApply()}>{props.title}</Text>
    </View>
  );
};
Header.default = {
  title: '',
  type: 1,
};
Header.PropTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
};

export default Header;
