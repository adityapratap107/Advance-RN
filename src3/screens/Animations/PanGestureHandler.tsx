import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring} from 'react-native-reanimated';
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler';

const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 2;
type ContextType = {
  translateX: number,
  translateY: number
}

const PanGestureHandlerComp = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent,ContextType>({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      // console.log(event.translationX)
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;

    },
    onEnd: (event) => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
      if(distance < CIRCLE_RADIUS) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const reanimatedSyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value},{translateY: translateY.value}]
    }
  })

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent}>
              <Animated.View style={[styles.box, reanimatedSyle]} />
          </PanGestureHandler>
        </View>
    </SafeAreaView>
  );
};

export default PanGestureHandlerComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS,
    borderWidth: 5,
    borderColor: 'rgba(0,0,256,0.5)',

  }
});
