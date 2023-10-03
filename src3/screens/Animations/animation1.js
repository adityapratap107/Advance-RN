import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

const Animation2 = () => {
  const animatedImgWidth = useSharedValue(70);
  const animatedImgHeight = useSharedValue(70);
  const animatedImgY = useSharedValue(0);
  const animatedImgX = useSharedValue(0);

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      width: animatedImgWidth.value,
      height: animatedImgHeight.value,
      transform: [
        {translateY: animatedImgY.value},
        {translateX: animatedImgX.value},
      ],
      borderRadius: 200,
    };
  });

  const animatedScale = useSharedValue(0);
  const animatedBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedScale.value}],
    };
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AnimatedButton
        style={[styles.button, animatedBtnStyle]}
        onPress={() => {
          animatedScale.value = withTiming(0, {duration: 500});
          animatedImgWidth.value = withTiming(70, {duration: 500});
          animatedImgHeight.value = withTiming(70, {duration: 500});
          animatedImgY.value = withTiming(0, {duration: 500});
        }}>
        <Image
          source={require('../../assets/images/close.png')}
          style={styles.closeImage}
        />
      </AnimatedButton>
      <Pressable
        style={{
          height: 70,
          width: 100,
        }}
        onPress={() => {
          if (animatedImgWidth.value === 70) {
            animatedScale.value = withTiming(1, {duration: 500});
            animatedImgWidth.value = withTiming(300, {duration: 500});
            animatedImgHeight.value = withTiming(300, {duration: 500});
            animatedImgY.value = withTiming(150, {duration: 500});
            animatedImgX.value = withTiming(42, {duration: 500});
          }
        }}>
        <AnimatedImage
          source={{
            uri: 'https://p7.hiclipart.com/preview/782/114/405/5bbc3519d674c.jpg',
          }}
          style={[styles.imgStyle, animatedImgStyle]}
        />
      </Pressable>
    </SafeAreaView>
  );
};

export default Animation2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  imgStyle: {
    height: 70,
    width: 70,
    borderRadius: 50,
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    left: 16,
  },
  closeImage: {
    height: 24,
    width: 24,
    tintColor: 'white',
  },
});
