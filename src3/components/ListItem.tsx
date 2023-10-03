import { StyleSheet, Text, View, ViewToken } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

type ListItemProps = {
    viewableItems: Animated.SharedValue<ViewToken[]>;
    item: {
        id: number;
    };
};

const ListItem: React.FC<ListItemProps> = ({item, viewableItems}) => {
    console.log('viewableItems', viewableItems.value);
    const rStyle = useAnimatedStyle(() => {
        const isVisible = Boolean(viewableItems.value.filter((item) => item.isViewable).find((viewableItem) => viewableItem.item.id === item.id));

        return {
            opacity: withTiming(isVisible ? 1 : 0),
            transform: [
                {scale: withTiming(isVisible ? 1 : 0.6)}
            ]
        }
    }, [])

  return (
    <Animated.View style={[styles.container, rStyle]}>
    </Animated.View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '90%',
        backgroundColor: '#78cad2',
        marginTop: 20,
        borderRadius: 15,
        alignSelf: 'center'
    }
})