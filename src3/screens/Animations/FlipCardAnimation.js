import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const FlipCardAnimation = () => {
  const spin = useSharedValue(0);
  const frontStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinValue}deg`),
        },
      ],
    };
  }, []);
  const backStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinValue}deg`),
        },
      ],
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.imageView, frontStyle]}>
        <Image
          source={{
            uri: 'https://cdn.mos.cms.futurecdn.net/5vPndSdDicde7EwTyAtqjk.jpg',
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      </Animated.View>
      <Animated.View style={[styles.flippedImageView, backStyle]}>
        <Image
          source={{
            uri: 'https://www.rollingstone.co.uk/wp-content/uploads/sites/2/2021/12/robert-pattinson-the-batman-1024x651.jpg',
          }}
          style={styles.image}
          resizeMode={'cover'}
        />
      </Animated.View>

      <TouchableOpacity
        style={styles.flipBtn}
        onPress={() => {
          spin.value = spin.value === 0 ? 1 : 0;
        }}>
        <Text style={styles.btnText}>Flip Card</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FlipCardAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    height: 400,
    width: 250,
    borderRadius: 16,
    backgroundColor: '#fff',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flippedImageView: {
    height: 400,
    width: 250,
    borderRadius: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
  },
  flipBtn: {
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  btnText: {
    color: '#000',
  },
});
