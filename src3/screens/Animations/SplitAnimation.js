import React, {useRef, useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const {Value, timing, interpolate, Extrapolate} = Animated;
const SplitAnimation = () => {
  const animation = useRef(new Value(0)).current;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      const openCurtains = timing(animation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });

      openCurtains.start(() => {
        setIsOpen(true);
      });
    }
  }, [isOpen]);

  const translateY = interpolate(animation, {
    inputRange: [0, 1],
    outputRange: [0, -300], // Adjust this value as needed
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.curtains, {transform: [{translateY}]}]}>
        {/* Content behind the curtains */}
        <Text style={styles.content}>Your Content Goes Here</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  curtains: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white', // Adjust as needed
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100,
  },
});

export default SplitAnimation;
