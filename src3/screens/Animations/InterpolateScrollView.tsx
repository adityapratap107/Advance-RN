import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Page } from '../../components/Page';

const SIZE = 100;
const WORDS = ["Hello","How","are","you"];

const InterpolateScrollView = () => {

    const translateX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler((event) => {
        translateX.value = event.contentOffset.x;
    })

  return (
    <Animated.ScrollView scrollEventThrottle={16} onScroll={scrollHandler} horizontal style={styles.container}>
        {
            WORDS.map((title, index) => {
                return <Page key={index.toString()} title={title} index={index} translateX={translateX}/>
            })
        }
    </Animated.ScrollView>
  )
}

export default InterpolateScrollView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
      },
    
})