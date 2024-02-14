import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import LottieView from 'lottie-react-native';

type Props = {
    item: OnboardingData;
    index: number;
}

const RenderOnboardingItem = ({item, index}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View>
        <View>
            <LottieView source={item.animation} style={{width: SCREEN_WIDTH * 0.9}} />
        </View>
      <Text>{item.text}</Text>
    </View>
  )
}

export default RenderOnboardingItem

const styles = StyleSheet.create({})