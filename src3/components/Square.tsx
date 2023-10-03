import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useDerivedValue, withSpring, withTiming } from 'react-native-reanimated';
import { N, SQUARE_SIZE } from '../utils/constants';

interface SquareProps {
    index: number;
    progress: Animated.SharedValue<number>
}

const Square: React.FC<SquareProps> = ({index, progress}) => {

    const offsetAngle = (2 * Math.PI) / N;
    const finalAngle = offsetAngle * (N - 1 - index);
    // const rotate = Math.min(finalAngle, progress.value)

    const rotate = useDerivedValue(() => {
        if(progress.value <= 2 * Math.PI) {
            return  Math.min(finalAngle, progress.value)
        }
        if(progress.value - 2  * Math.PI < finalAngle) {
            return finalAngle;
        }
        return progress.value
    }, []);

    const translateY = useDerivedValue(() => {
        if(rotate.value === finalAngle) {
            return withSpring(-N * SQUARE_SIZE)
        }
        if(progress.value > 2*Math.PI) {
            return withTiming((index - N) * SQUARE_SIZE);
        }
        return -index * SQUARE_SIZE;
    })

    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {rotate: `${rotate.value}rad`},
                {translateY: translateY.value},
            ],
        }
    })

  return (
    <Animated.View key={index} style={[styles.box, 
        {
            opacity: (index + 1) / N,
            transform: [
                {rotate: `${rotate.value}rad`},
                {translateY: -index * SQUARE_SIZE},
            ],
        }, rStyle]} />
  )
}

export default Square

const styles = StyleSheet.create({
    box: {
        height: SQUARE_SIZE,
        aspectRatio: 1,
        backgroundColor: 'white',
        position: 'absolute',
      },
})