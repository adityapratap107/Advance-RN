import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useSharedValue } from 'react-native-reanimated';
import CarouselListItem, { ListItemWidth } from '../../components/CarouselListItem';

const data = [
    require('../../assets/circularCarousel/images/00.jpg'),
    require('../../assets/circularCarousel/images/01.jpg'),
    require('../../assets/circularCarousel/images/02.jpg'),
    require('../../assets/circularCarousel/images/03.jpg'),
    require('../../assets/circularCarousel/images/04.jpg'),
    require('../../assets/circularCarousel/images/05.jpg'),
    require('../../assets/circularCarousel/images/06.jpg'),
    require('../../assets/circularCarousel/images/07.jpg'),
    require('../../assets/circularCarousel/images/08.jpg'),
    require('../../assets/circularCarousel/images/09.jpg'),
  ];

const CircularCarousel = () => {

    const contentOffset = useSharedValue(0);

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            horizontal
            style={styles.flatlistStyle}
            contentContainerStyle={styles.contentContainerStyle}
            pagingEnabled
            snapToInterval={ListItemWidth}
            keyExtractor={(_, index) => index.toString()}
            scrollEventThrottle={16}    // 60 fps -> 16ms
            onScroll={(event) => {
                contentOffset.value = event.nativeEvent.contentOffset.x;    
            }}
            renderItem={({item, index}) => {
                return (
                    
                    <CarouselListItem imageSrc={item} contentOffset={contentOffset} index={index}/>
                )
            }}
            />
    </SafeAreaView>
  )
}

export default CircularCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlistStyle: {
        position: 'absolute',
        bottom: 0,
        height: 300,
    },
    contentContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 3 * ListItemWidth,
    }
  
})