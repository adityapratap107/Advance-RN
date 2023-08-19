import {
  StyleSheet,
  View,
  Animated,
  PanResponder,
  Easing,
  Dimensions,
  NativeModules,
  LayoutAnimation,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SWIPE_THERSHOLD = SCREEN_WIDTH / 2;

const {UIManager} = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const Deck = props => {
  const position = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [counter, setCounter] = useState(0);
  const panResponder = useRef(
    PanResponder.create({
      // onMoveShouldSetPanResponder: () => true,
      // onPanResponderMove: (e, gesture) => {
      //   position.setValue({x: gesture.dx})
      // },
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx: position.x, dy: position.y},
      ]),
      onPanResponderRelease: (e, gesture) => {
        if (gesture.dx > SWIPE_THERSHOLD) {
          console.log('right');
          swiped('right');
        } else if (gesture.dx < -SWIPE_THERSHOLD) {
          console.log('left');
          swiped('left');
        } else {
          Animated.spring(position, {
            toValue: {x: 0, y: 0},
          }).start();
        }
        // position.extractOffset();
      },
    }),
  ).current;

  const swiped = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH + 10 : -SCREEN_WIDTH - 10;
    Animated.spring(position, {
      toValue: {x: x, y: 0},
    }).start(() => {
      LayoutAnimation.spring();
      position.setValue({x: 0, y: 0});
      setCounter(prevState => {
        return prevState + 1;
      });
    });
  };

  const rotate = position.x.interpolate({
    inputRange: [-SCREEN_WIDTH, 0, SCREEN_WIDTH],
    outputRange: ['-120deg', '0deg', '120deg'],
  });

  const renderCards = () => {
    return props.data.map((item, index) => {
      if (index < counter) {
        return null;
      } else if (index === counter) {
        return (
          <Animated.View
            key={item.id}
            style={{
              transform: [
                {translateX: position.x},
                // {translateY: position.y},
                {rotate: rotate},
              ],
            }}
            {...panResponder.panHandlers}>
            {props.renderCard(item)}
          </Animated.View>
        );
      }
      return props.renderCard(item);
    });
  };

  return <View>{renderCards()}</View>;
};

export default Deck;

const styles = StyleSheet.create({});
