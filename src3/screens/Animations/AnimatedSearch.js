import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedSearch = () => {
  const animation = useSharedValue(0);
  const [value, setValue] = useState(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value === 1
          ? withTiming(300, {duration: 500})
          : withTiming(0, {duration: 500}),
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]}>
        <TextInput style={styles.inputStyle} placeholder={'Search here...'} />
        <TouchableOpacity
          onPress={() => {
            if (animation.value === 1) {
              animation.value = 0;
              setValue(0);
            } else {
              animation.value = 1;
              setValue(1);
            }
          }}>
          <Image
            source={
              value === 1
                ? {
                    uri: 'https://png.pngtree.com/png-clipart/20190517/original/pngtree-vector-cross-icon-png-image_4232054.jpg',
                  }
                : {
                    uri: 'https://cdn3.iconfinder.com/data/icons/feather-5/24/search-512.png',
                  }
            }
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AnimatedSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 300,
    height: 50,
    backgroundColor: '#e7e7e7',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputStyle: {
    width: '85%',
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
});
