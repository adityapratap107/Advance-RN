import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SlidingCounter from '../../components/SlidingCounter'

const SlidingCounterAnimation = () => {
  return (
    <SafeAreaView style={styles.container}>
        <SlidingCounter/>
    </SafeAreaView>
  )
}

export default SlidingCounterAnimation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})