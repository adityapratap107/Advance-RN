import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated from 'react-native-reanimated';
import data from '../../utils/data';
import RenderOnboardingItem from '../../components/RenderOnboardingItem';


const OnboardingScreen = () => {
  return (
    <View style={styles.itemContainer}>
      <Animated.FlatList
        data={data}
        renderItem={({item, index}) => {
          return <RenderOnboardingItem item={item} index={index} />
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 120,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 44,
    fontWeight: 'bold',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
