import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const SwipeAnimation = () => {
  const animation = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = animation.value;
    },
    onActive: (event, ctx) => {
      animation.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animation.value = withSpring(0);
    },
  });

  const ranimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });

  const animatedIconLeft = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value > 60 ? withSpring(2) : withSpring(1)},
      ],
    };
  });
  const animatedIconRight = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animation.value < -50 ? withSpring(2) : withSpring(1)},
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.outerContainer}>
      <SafeAreaView style={styles.container}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={styles.backgroundBox}>
            <Animated.View style={[styles.imageView, animatedIconLeft]}>
              <Image
                source={{
                  uri: 'https://icon-library.com/images/archive-icon-png/archive-icon-png-16.jpg',
                }}
                style={styles.imageStyle}
              />
            </Animated.View>
            <Animated.View style={[styles.imageView2, animatedIconRight]}>
              <Image
                source={{
                  uri: 'https://icon-library.com/images/archive-icon-png/archive-icon-png-16.jpg',
                }}
                style={styles.imageStyle}
              />
            </Animated.View>
            <Animated.View style={[styles.innerview, ranimatedStyle]}>
              <View style={styles.upperUiView}>
                <Text style={styles.text}>A</Text>
              </View>
              <View style={styles.heading}>
                <Text style={styles.headingText}>Hello</Text>
                <Text style={styles.descriptionText}>Hello</Text>
              </View>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default SwipeAnimation;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundBox: {
    height: 100,
    width: '95%',
    backgroundColor: 'green',
    elevation: 5,
    shadowColor: '#200000',
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 10,
    shadowOpacity: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  innerview: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageView: {
    width: 14,
    height: 14,
    marginLeft: 20,
  },
  imageView2: {
    width: 14,
    height: 14,
    marginRight: 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
  upperUiView: {
    width: 50,
    height: 50,
    backgroundColor: 'purple',
    borderRadius: 25,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
  },
  heading: {
    marginLeft: 20,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  descriptionView: {
    marginLeft: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: 'grey',
  },
});
