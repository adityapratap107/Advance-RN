import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import Animated, { interpolate, runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler'

const clamp = (value:number, min: number, max: number) => {
    'worklet';
    return Math.min(Math.max(value, min), max);
}
const BUTTON_WIDTH = 170;
const BUTTON_HEIGHT = 70;


const SlidingCounter = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const MAX_SLIDE_OFFSET = BUTTON_WIDTH * 0.3;
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        setCount((currCount) => currCount + 1)
    }, [])
    const decrementCount = useCallback(() => {
        setCount((currCount) => currCount - 1)
    }, [])
    const resetCount = useCallback(() => {
        setCount(0)
    }, [])

    const onPanGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, {x: number, y: number}>({
        onStart: (_,context) => {
          context.x =  translateX.value;
          context.y =  translateY.value;
        },
        onActive: (event, context) => {
            console.log(event.translationX);
            translateX.value = clamp(event.translationX + context.x, -MAX_SLIDE_OFFSET, MAX_SLIDE_OFFSET);
            translateY.value = clamp(event.translationY + context.y, 0, MAX_SLIDE_OFFSET);
        },
        onEnd: () => {
            if (translateX.value === MAX_SLIDE_OFFSET) {
                runOnJS(incrementCount)();
            } else if (translateX.value === -MAX_SLIDE_OFFSET) {
                runOnJS(decrementCount)();
            } else if (translateY.value === MAX_SLIDE_OFFSET) {
                runOnJS(resetCount)();

            }
            translateX.value = withSpring(0)
            translateY.value = withSpring(0)
        }
    })
    const rStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: translateX.value},
                {translateY: translateY.value}
            ]
        }
    });

    const rPlusMinusStyle = useAnimatedStyle(() => {
        const opacityX = interpolate(translateX.value, [-MAX_SLIDE_OFFSET, 0, MAX_SLIDE_OFFSET], [0.4,0.8,0.4])
        const opacityY = interpolate(translateY.value, [0, MAX_SLIDE_OFFSET], [1, 0])

        return {
            opacity: opacityX * opacityY
        }
    }, []);

    const rCloseIconStyle = useAnimatedStyle(() => {
        const opacity = interpolate(translateX.value, [0, MAX_SLIDE_OFFSET], [0,0.8])
        return {
            opacity
        }
    }, [])

    const rButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value * 0.1
                },
                {
                    translateY: translateY.value * 0.1
                },
                
            ]
        }
    }, [])

  return (
    <Animated.View style={[styles.button, rButtonStyle]}>
        <Animated.Text style={[styles.plusMinusIcon, rPlusMinusStyle]}>-</Animated.Text>
        <Animated.Text style={[styles.count, rCloseIconStyle]}>X</Animated.Text>
        <Animated.Text style={[styles.plusMinusIcon, rPlusMinusStyle]}>+</Animated.Text>
        <View style={{...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center'}}>
            <PanGestureHandler onGestureEvent={onPanGestureEvent}>
                <Animated.View style={[styles.circularView,rStyle]}>
                    <Text style={styles.textCount}>{count}</Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    </Animated.View>
  )
}

export default SlidingCounter

const styles = StyleSheet.create({
    button: {
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        backgroundColor: '#111111',
        borderRadius: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    plusMinusIcon: {
        fontSize: 30,
        color: 'white'
    },
    count: {
        color: 'white',
        fontSize: 30,

    },
    circularView: {
        height: 50,
        width: 50,
        backgroundColor: '#232323',
        borderRadius: 25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCount: {
        color: 'white',
        fontSize: 30,
    }
})