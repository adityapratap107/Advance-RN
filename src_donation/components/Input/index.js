import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = props => {
  const [value, setValue] = useState(false);
  const inputHandler = val => {
    setValue(val);
    props.onChangeText(val);
  };
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={inputHandler}
        placeholder={props.placeHolder}
        keyboardType={props.keyboardType ? props.keyboardType : 'default'}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  onChangeText: PropTypes.func,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

export default Input;
