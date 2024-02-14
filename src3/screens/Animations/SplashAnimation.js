import {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const SplashAnimation = () => {
  const screenWidth = Dimensions.get('window').width;
  const halfScreenWidth = screenWidth / 2;

  const leftHalfAnimation = useRef(new Animated.Value(0)).current;
  const rightHalfAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateView = () => {
      Animated.parallel([
        Animated.timing(leftHalfAnimation, {
          toValue: -halfScreenWidth,
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(rightHalfAnimation, {
          toValue: halfScreenWidth,
          duration: 2000,
          delay: 1000,
          useNativeDriver: false,
        }),
      ]).start(() => {
        leftHalfAnimation.setValue(-halfScreenWidth);
        rightHalfAnimation.setValue(halfScreenWidth);
        // animateView();
      });
    };

    animateView();
  }, []);

  const [animatedValuess] = useState(new Animated.Value(0));

  useEffect(() => {
    splitImageAnimation();
  }, []);

  const splitImageAnimation = () => {
    Animated.timing(animatedValuess, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.halfContainer,
          styles.leftHalf,
          {transform: [{translateX: leftHalfAnimation}]},
        ]}>
        {/* Content for the left half */}
        <Image
          source={require('../../assets/images/icon1.png')}
          style={styles.imageLogo}
          resizeMode={'contain'}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.halfContainer,
          styles.rightHalf,
          {transform: [{translateX: rightHalfAnimation}]},
        ]}>
        {/* Content for the left half */}
        <Image
          source={require('../../assets/images/icon1.png')}
          style={[styles.imageLogo2]}
          resizeMode={'contain'}
        />
      </Animated.View>
    </View>
  );
};

export default SplashAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  leftHalf: {
    backgroundColor: 'purple',
  },
  rightHalf: {
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageLogo: {
    // height: 100,
    // width: 100,
    // left: 26,
  },
  imageLogo2: {
    // height: 100,
    // width: 100,
    // right: 26,
  },
});
