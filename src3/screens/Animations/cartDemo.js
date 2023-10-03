import React, {useState} from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const CartDemo = () => {
  const [count, setCount] = useState(0);
  const [btnClicked, setBtnClicked] = useState(false);
  const animateY = useSharedValue(0);
  const animateX = useSharedValue(0);
  const scale = useSharedValue(0);
  const scale2 = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animateX.value},
        {translateY: animateY.value},
        {scale: scale.value},
      ],
    };
  });
  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale2.value}],
    };
  });
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Image
        source={{
          uri: 'https://baccabucci.com/cdn/shop/files/black_1.jpg?v=1685185225',
        }}
        style={styles.imageStyle}
      />
      <View style={styles.bagView}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8r1mxPVjb9RUT6xcLuAsln4QUqEUWxYxf1Q&usqp=CAU',
          }}
          style={styles.bagImage}
        />
        <Animated.View style={[styles.countView, animatedStyle2]}>
          <Text style={styles.countText}>{count}</Text>
        </Animated.View>
      </View>
      <View style={styles.shoesTitleView}>
        <Text style={styles.shoesTitle}>FORMAL SHOES</Text>
      </View>
      <Text style={styles.description}>
        "On the other hand, we denounce with righteous indignation and dislike
        men who are so beguiled and demoralized by the charms of pleasure of the
        moment, so blinded by desire, that they cannot foresee the pain and
        trouble that are bound to ensue; and equal blame belongs to those who
        fail in their duty through weakness of will, which is the same as saying
        through shrinking from toil and pain. These cases are perfectly simple
        and easy to distinguish. In a free hour, when our power of choice is
        untrammelled and when nothing prevents our being able to do what we like
        best, every pleasure is to be welcomed and every pain avoided. But in
        certain circumstances and owing to the claims of duty or the obligations
        of business it will frequently occur that pleasures have to be
        repudiated and annoyances accepted. The wise man therefore always holds
        in these matters to this principle of selection: he rejects pleasures to
        secure other greater pleasures, or else he endures pains to avoid worse
        pains."
      </Text>

      <Animated.View style={[styles.floatView, animatedStyle]}>
        <Text style={styles.floatText}>{'+1'}</Text>
      </Animated.View>
      <TouchableOpacity
        disabled={btnClicked}
        style={styles.addToCartBtn}
        onPress={() => {
          if (animateX.value === 0) {
            setBtnClicked(true);
            scale.value = 1;
            animateX.value = withTiming(170, {duration: 1500});
            animateY.value = withTiming(-680, {duration: 1500});
            setTimeout(() => {
              scale.value = 0;
              scale2.value = withSpring(1.5);
              setCount(count + 1);
              animateX.value = withTiming(0, {duration: 1500});
              animateY.value = withTiming(0, {duration: 1500});
              setTimeout(() => {
                scale2.value = withSpring(1);
              }, 100);
              setBtnClicked(false);
            }, 1500);
          }
        }}>
        <Text style={styles.addtocartText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 300,
    width: '100%',
  },
  shoesTitleView: {
    alignItems: 'center',
    marginVertical: 16,
  },
  shoesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
    color: 'grey',
  },
  addToCartBtn: {
    backgroundColor: 'black',
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 12,
    marginVertical: 8,
  },
  addtocartText: {
    color: '#fff',
  },
  bagView: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 70,
    right: 10,
    borderRadius: 30,
  },
  bagImage: {
    height: 40,
    width: 40,
  },
  countView: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  countText: {
    color: 'white',
    fontSize: 16,
  },
  floatView: {
    width: 30,
    height: 30,
    backgroundColor: 'red',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  floatText: {
    color: 'white',
    fontSize: 16,
  },
});
