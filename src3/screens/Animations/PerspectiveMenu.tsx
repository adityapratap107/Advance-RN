import {Dimensions, SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const THRESHOLD = SCREEN_WIDTH / 3;

const PerspectiveMenu = () => {

  const translateX = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {x: number}>({
    onStart: (event,context) => {
      context.x = translateX.value;
    },
    onActive: (event, context) => {
      console.log(event.translationX);
      translateX.value = event.translationX + context.x;
    },
    onEnd: () => {
      if(translateX.value <= THRESHOLD) {
        translateX.value = withTiming(0);
      } else {
        translateX.value = withTiming(SCREEN_WIDTH / 2);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(translateX.value, [0, SCREEN_WIDTH / 2], [0, 3], Extrapolate.CLAMP)
    const borderRadius = interpolate(translateX.value, [0, SCREEN_WIDTH / 2], [0, 15],  Extrapolate.CLAMP)

    return {
      transform: [
        {perspective: 100},
        {translateX: translateX.value},
        {rotateY: `-${rotate}deg`}
      ],
      borderRadius
    }
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.innerView, rStyle]} />
      </PanGestureHandler>
    </SafeAreaView>
  );
};

export default PerspectiveMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e23',
  },
  innerView: {
    flex: 1,
    backgroundColor: 'white',
  },
});
