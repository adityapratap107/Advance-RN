import {StyleSheet, View, Animated} from 'react-native';
import React, {useEffect} from 'react';

const Ball = () => {
  const position = new Animated.ValueXY(0, 0);
  useEffect(() => {
    Animated.spring(position, {
      toValue: {x: 300, y: 500},
      delay: 1000,
    }).start();
  }, []);
  return (
    <Animated.View style={position.getLayout()}>
      <View style={styles.ball} />
    </Animated.View>
  );
};

export default Ball;

const styles = StyleSheet.create({
  ball: {
    backgroundColor: '#000',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});
