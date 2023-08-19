import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';
import { Text } from 'react-native';

const Title = props => {
  return <Text style={styles.title}>{props.title}</Text>;
};

Title.PropTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
