import { FlatList, SafeAreaView, StyleSheet, Text, View, ViewToken } from 'react-native'
import React from 'react'
import ListItem from '../../components/ListItem'
import { useSharedValue } from 'react-native-reanimated'

const data = new Array(50).fill(0).map((_,index) => ({id: index}))

const AnimatedFlatList = () => {
    // console.log(data);
    const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
            data={data}
            contentContainerStyle={{paddingTop: 40}}
            onViewableItemsChanged={({viewableItems: vItems}) => {
                // console.log(vItems)
                viewableItems.value = vItems;
            }}
            renderItem={({item}) => {
                return <ListItem item={item} viewableItems={viewableItems} />
            }}
        />
    </SafeAreaView>
  )
}

export default AnimatedFlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
})