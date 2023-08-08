import {StyleSheet, View, Animated, PanResponder} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const Deck = props => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.extractOffset();
      },
    }),
  ).current;


  const renderCards = () => {
    return props.data.map(item => {
      return props.renderCard(item);
    });
  };
  return (
    <Animated.View
      style={{transform: [{translateX: pan.x}, {translateY: pan.y}]}}
      {...panResponder.panHandlers}>
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;

const styles = StyleSheet.create({});
