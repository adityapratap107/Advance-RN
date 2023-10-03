import {Text, TouchableOpacity, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import styles from './styles';

const Home = () => {
  const animatedValue = useSharedValue(100);
  const h = useSharedValue(100);
  const w = useSharedValue(100);
  const r = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: w.value,
      height: h.value,
      borderRadius: r.value,
      opacity: w.value === 100 ? 1 : 0.6,
      // transform: [{translateX: w.value - 140}, {translateY: -h.value + 180}],
    };
  });
  return (
    <View style={styles.container}>
      {/* <Animated.View
        style={[styles.box, {width: animatedValue, height: animatedValue}]}
      />
      <View style={styles.buttonOuterView}>
        <Pressable
          style={[styles.button]}
          onPress={() => {
            animatedValue.value = withTiming(animatedValue.value + 50);
          }}>
          <Text style={{color: 'white'}}>SCALE </Text>
        </Pressable>
      </View> */}

      <Animated.View
        style={[
          {width: 100, height: 100, backgroundColor: 'red', marginTop: 60,},
          animatedStyle,
        ]}
      />
      <TouchableOpacity
        style={styles.pressButtonStyle}
        onPress={() => {
          if (w.value === 100) {
            h.value = withDelay(2000, withSpring(200));
            w.value = withDelay(2000, withSpring(200));
            r.value =  withDelay(2000, withSpring(100));
          } else {
            h.value = withDelay(2000, withSpring(100));
            w.value = withDelay(2000, withSpring(100));
            r.value = withDelay(2000, withSpring(0));
          }
        }}>
        <Text style={{color: 'white'}}>Animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
