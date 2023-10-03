import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Profiler, useCallback, useEffect, useState} from 'react';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1fA';
const {height, width} = Dimensions.get('window');
const CIRCLE_LENGTH = 1000;
const R = CIRCLE_LENGTH / (2 * Math.PI);

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgressBar = () => {
  const progress = useSharedValue(0);
  const [btnName, setBtnName] = useState('Run');
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
    };
  });

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}`;
  });

  const onBtnPress = useCallback(() => {
    setBtnName('Reset');
    progress.value = withTiming(progress.value > 0 ? 0 : 1, {duration: 2000});
    if (progress.value > 0) {
      setBtnName('Run');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.progressText}>{progressText.value}</Text> */}
      <ReText style={styles.progressText} text={progressText} />
      <Svg style={{position: 'absolute'}}>
        <Circle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={BACKGROUND_STROKE_COLOR}
          strokeWidth={30}
          fill={BACKGROUND_COLOR}
        />
        <AnimatedCircle
          cx={width / 2}
          cy={height / 2}
          r={R}
          stroke={STROKE_COLOR}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          fill={BACKGROUND_COLOR}
        />
      </Svg>
      <TouchableOpacity style={styles.button} onPress={onBtnPress}>
        <Text style={styles.buttonText}>{btnName}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 80,
    color: 'rgba(256,256,256,0.7)',
    zIndex: 1,
    width: 200,
    textAlign: 'center',
    top: 32,
  },
  button: {
    width: width * 0.7,
    height: 60,
    backgroundColor: BACKGROUND_STROKE_COLOR,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    letterSpacing: 2.0,
  },
});
