import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { horizontalScale } from '../../assets/styles/scaling';

const Tab = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 33;
  const TabWidth = {
    width: horizontalScale(paddingHorizontal * 2) + width,
  };
  return (
    <Pressable
      onPress={() => props.onPress(props.tabId)}
      // disabled={props.isInActive}
      style={[styles.tab, props.isInActive && styles.inactiveTab, TabWidth]}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          // console.log(event.nativeEvent.lines[0].width);
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[styles.tabTitle, props.isInActive && styles.inactiveTabTitle]}>
        {props.title}
      </Text>
    </Pressable>
  );
};
Tab.default = {
  isInActive: false,
  onPress: () => {},
};
Tab.propTypes = {
  tabId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isInActive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
