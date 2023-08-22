import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const BadgeWidth = {
    width: horizontalScale(paddingHorizontal * 2) + width,
  };
  return (
    <View style={[styles.badge, BadgeWidth]}>
      <Text
        ref={textRef}
        onTextLayout={event => {
          // console.log(event.nativeEvent.lines[0].width);
          setWidth(event.nativeEvent.lines[0].width);
        }}
        style={[styles.badgeTitle]}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
