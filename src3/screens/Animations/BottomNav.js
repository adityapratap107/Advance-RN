import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);

const BottomNav = () => {
  // for changing color
  const [color1, setColor1] = useState('black');
  const [color2, setColor2] = useState('black');
  const [color3, setColor3] = useState('black');

  const [selectedTab, setSelectedTab] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });

  //   for button
  const animatedBtn1Y = useSharedValue(0);
  const animatedBtn2Y = useSharedValue(0);
  const animatedBtn3Y = useSharedValue(0);
  const animatedBtnStyle1 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn1Y.value}],
    };
  });
  const animatedBtnStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn2Y.value}],
    };
  });
  const animatedBtnStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedBtn3Y.value}],
    };
  });

  useEffect(() => {
    if (selectedTab === 0) {
      setColor2('black');
      setColor3('black');
      animatedY.value = withTiming(50, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(0, {duration: 500});
      }, 500);

      setTimeout(() => {
        animatedBtn1Y.value = withTiming(-150, {duration: 500});
        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));
        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn1Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor1('white');
          }, 100);
        }, 500);
      }, 1000);
    } else if (selectedTab === 1) {
      setColor1('black');
      setColor3('black');
      animatedY.value = withTiming(50, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(113, {duration: 500});
      }, 500);

      setTimeout(() => {
        animatedBtn2Y.value = withTiming(-150, {duration: 500});

        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));

        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn2Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor2('white');
          }, 100);
        }, 500);
      }, 1000);
    } else {
      setColor1('black');
      setColor2('black');
      animatedY.value = withTiming(50, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(226, {duration: 500});
      }, 500);

      setTimeout(() => {
        animatedBtn3Y.value = withTiming(-150, {duration: 500});

        animatedY.value = withDelay(100, withTiming(-100, {duration: 500}));

        setTimeout(() => {
          animatedY.value = withTiming(0, {duration: 500});
          animatedBtn3Y.value = withTiming(0, {duration: 500});
          setTimeout(() => {
            setColor3('white');
          }, 100);
        }, 500);
      }, 1000);
    }
  }, [selectedTab]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <Animated.View style={[styles.backgroundTabView, animatedStyle]} />
        <AnimatedBtn
          style={[styles.touchableStyle, animatedBtnStyle1]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2832/2832517.png',
            }}
            style={[styles.image, {tintColor: color1}]}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[styles.touchableStyle, animatedBtnStyle2]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2832/2832517.png',
            }}
            style={[styles.image, {tintColor: color2}]}
          />
        </AnimatedBtn>
        <AnimatedBtn
          style={[styles.touchableStyle, animatedBtnStyle3]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2832/2832517.png',
            }}
            style={[styles.image, {tintColor: color3}]}
          />
        </AnimatedBtn>
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabContainer: {
    width: '100%',
    height: 70,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  touchableStyle: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
  },
  backgroundTabView: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: 'orange',
    position: 'absolute',
  },
});
