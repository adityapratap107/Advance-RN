import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 100;
const handleRotation = progress => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};
const BasicAnimation = () => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [
        {scale: scale.value},
        {rotate: handleRotation(progress.value)},
      ],
    };
  });

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5, {duration: 500}), 6, true);
    scale.value = withRepeat(withSpring(2, {duration: 500}), 6, true);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
    </SafeAreaView>
  );
};

export default BasicAnimation;

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
    backgroundColor: 'blue',
  },
});
