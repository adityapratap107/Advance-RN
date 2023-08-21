import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Button = props => {
  return (
    <Pressable
      onPress={() => props.onPress()}
      disabled={props.isDisabled}
      style={[styles.button, props.isDisabled && styles.disabledButton]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  );
};
Button.default = {
  isDisabled: false,
  onPress: () => {},
};
Button.PropTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
