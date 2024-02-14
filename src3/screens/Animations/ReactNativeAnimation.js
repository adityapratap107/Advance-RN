import {
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

const ReactNativeAnimation = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [btnClicked, setBtnClicked] = useState(false);
  const onBtnPress = () => {
    setBtnClicked(!btnClicked);
    Animated.timing(animation, {
      toValue: btnClicked ? 0 : 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateY: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -100],
                }),
              },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                }),
              },
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '180deg'],
                }),
              },
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.5],
                }),
              },
            ],
          },
        ]}
      />
      <Pressable style={styles.buttonStyle} onPress={onBtnPress}>
        <Text style={styles.btnText}> Press to animate</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ReactNativeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: 'orange',
    height: 100,
    width: 100,
  },
  buttonStyle: {
    backgroundColor: 'black',
    padding: 16,
    marginTop: 16,
    borderRadius: 12,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
