import { Dimensions, Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

type CircularCarouselListItemProps = {
    imageSrc: ImageProps['source'];
    index: number;
    contentOffset: Animated.SharedValue<number>;
}

const {width: windowWidth} = Dimensions.get('window');
export const ListItemWidth = windowWidth / 4;

const CarouselListItem: React.FC<CircularCarouselListItemProps> = ({imageSrc, index, contentOffset}) => {
    const rStyle = useAnimatedStyle(() => {

        const inputRange = [
                        (index - 2) * ListItemWidth,
                        (index - 1) * ListItemWidth,
                        index * ListItemWidth,
                        (index + 1) * ListItemWidth,
                        (index + 2) * ListItemWidth,
        ]

        const translateYoutputRange = [
            0,
            -ListItemWidth / 3,
            -ListItemWidth / 2,
            -ListItemWidth / 3,
            0
        ];

        const opacityOutputRange = [0.7,0.9,1,0.9,0.7];

        const scaleOutputRange = [0.5,0.9,1.2,0.9,0.5]

        const translateY = interpolate(contentOffset.value, inputRange, translateYoutputRange, Extrapolate.CLAMP);

        const opacity  = interpolate(contentOffset.value, inputRange,opacityOutputRange, Extrapolate.CLAMP)

        const scale = interpolate(contentOffset.value, inputRange, scaleOutputRange, Extrapolate.CLAMP);

        return {
            opacity,
            transform: [
                {
                    translateY: translateY
                },
                {
                    translateX: ListItemWidth / 2 + ListItemWidth,
                },
                {
                    scale: scale
                }
            ]
        }
    })
  return (
    <Animated.View style={[styles.flatlistInnerView, rStyle]}>
        <Image
            source={imageSrc}
            style={styles.image}
        />
    </Animated.View>
  )
}

export default CarouselListItem

const styles = StyleSheet.create({
    flatlistInnerView: {
        width: ListItemWidth,
        aspectRatio: 1,
        marginHorizontal: 4,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 20,
        elevation: 5
    },
    image: {
        height: ListItemWidth,
        width: ListItemWidth,
        borderRadius: 200,
        margin: 5,
        borderColor: 'white',
        shadowColor: 'black',
    }
})