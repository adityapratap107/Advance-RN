import AnimatedLottieView, { AnimatedLottieViewProps } from 'lottie-react-native';
import React from 'react'
import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

interface AnimatedWrapperProps extends AnimatedLottieViewProps {
    children: React.ReactNode;
    showAnimation?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    title?: string;
}

const AnimatedWrapper: React.FC<AnimatedWrapperProps> = ({children, showAnimation, containerStyle, textStyle, title, style, ...lottieProps}) => {
    if(!showAnimation) {
        return <>{children}</>
    };
  return (
    <View style={[{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: '30%'}, containerStyle]}>
        <AnimatedLottieView 
            autoPlay 
            loop 
            // source={require('../assets/lottie/astronout.json')} 
            style={[{width: '80%', height: 200, aspectRatio: 1}, style]} 
            {...lottieProps} 
        />
    <Text style={[{fontSize: 25}, textStyle]}>{title}</Text>
  </View>
  )
}

export default AnimatedWrapper

const styles = StyleSheet.create({})