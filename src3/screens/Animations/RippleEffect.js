import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ripple from '../../components/Ripple';

const RippleEffect = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Ripple
        style={styles.ripple}
        onTap={() => {
          console.log('tap');
        }}>
        <Text style={{fontSize: 25}}>Tap</Text>
      </Ripple>
    </SafeAreaView>
  );
};

export default RippleEffect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ripple: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 20,
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
