import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {N, SQUARE_SIZE} from '../../utils/constants';
import Square from '../../components/Square';
import {Easing, useSharedValue, withTiming} from 'react-native-reanimated';

const ClockLoader = () => {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(2 * Math.PI, {
      duration: 4000,
      easing: Easing.linear,
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {new Array(12).fill(0).map((_, index) => {
        return <Square key={index} progress={progress} index={index} />;
      })}
    </SafeAreaView>
  );
};

export default ClockLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: SQUARE_SIZE,
    aspectRatio: 1,
    backgroundColor: 'white',
  },
});
