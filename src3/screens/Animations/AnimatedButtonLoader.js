import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedButtonLoader = () => {
  const animatedWidth = useSharedValue(250);
  const animatedRadius = useSharedValue(20);
  const [btnClicked, setBtnClicked] = useState(false);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      borderRadius: animatedRadius.value,
    };
  });
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedBtn
        style={[styles.button, animatedStyle]}
        onPress={() => {
          if (animatedWidth.value === 250) {
            animatedWidth.value = withTiming(50, {duration: 500});
            animatedRadius.value = withTiming(25, {duration: 500});
            setBtnClicked(true);
            setTimeout(() => {
              animatedWidth.value = withTiming(250, {duration: 500});
              animatedRadius.value = withTiming(20, {duration: 500});
              setBtnClicked(false);
            }, 3000);
          }
        }}>
        {btnClicked ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.text}>Login</Text>
        )}
      </AnimatedBtn>
    </SafeAreaView>
  );
};

export default AnimatedButtonLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    width: 250,
    backgroundColor: 'purple',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
});
