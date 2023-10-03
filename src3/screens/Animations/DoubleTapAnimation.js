import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useRef} from 'react';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

const {width: SIZE} = Dimensions.get('window');
const DoubleTapAnimation = () => {
  const scale = useSharedValue(0);
  const doubleTapRef = useRef();
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: Math.max(scale.value, 0)}],
    };
  });

  const onDoubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if(isFinished) {
        scale.value = withDelay(500, withSpring(0));
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <TapGestureHandler
        waitFor={doubleTapRef}
        onActivated={() => {
          console.log('SINGLE TAP');
        }}>
        <TapGestureHandler
          maxDelayMs={250}
          ref={doubleTapRef}
          numberOfTaps={2}
          onActivated={onDoubleTap}>
          <Animated.View style={styles.animateview}>
            <ImageBackground
              source={{
                uri: 'https://img.freepik.com/premium-photo/colorful-leaf_665280-35144.jpg',
              }}
              style={styles.image}>
              <AnimatedImage
                source={require('../../assets/images/heart.png')}
                style={[
                  styles.heartStyle,
                  {
                    shadowOffset: {width: 0, height: 20},
                    shadowOpacity: 0.4,
                    shadowRadius: 35,
                  },
                  rStyle,
                ]}
                resizeMode={'contain'}
              />
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </TapGestureHandler>
    </SafeAreaView>
  );
};

export default DoubleTapAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: SIZE,
    width: SIZE,
  },
  heartStyle: {
    height: 200,
    width: '100%',
    top: 80,
  },
  animateview: {},
});
