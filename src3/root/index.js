import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import AnimatedButtonLoader from '../screens/Animations/AnimatedButtonLoader';
import Animation2 from '../screens/Animations/animation1';
import BasicAnimation from '../screens/Animations/BasicAnimation';
import BottomNav from '../screens/Animations/BottomNav';
import CartDemo from '../screens/Animations/cartDemo';
import CircularProgressBar from '../screens/Animations/CircularProgressBar';
import ClockLoader from '../screens/Animations/ClockLoader';
import DoubleTapAnimation from '../screens/Animations/DoubleTapAnimation';
import InterpolateScrollView from '../screens/Animations/InterpolateScrollView';
import PanGestureHandlerComp from '../screens/Animations/PanGestureHandler';
import PerspectiveMenu from '../screens/Animations/PerspectiveMenu';
import RippleEffect from '../screens/Animations/RippleEffect';
import Home from '../screens/Home';
import AnimatedFlatList from '../screens/Animations/AnimatedFlatList';
import SlidingCounterAnimation from '../screens/Animations/SlidingCounterAnimation';
import FlipCardAnimation from '../screens/Animations/FlipCardAnimation';
import LottieAnimation from '../screens/Animations/LottieAnimation';
import CircularCarousel from '../screens/Animations/CircularCarousel';
import OnboardingScreen from '../screens/Animations/OnboardingScreen';
import ReactNativeAnimation from '../screens/Animations/ReactNativeAnimation';
import SplashAnimation from '../screens/Animations/SplashAnimation';
import SplitAnimation from '../screens/Animations/SplitAnimation';
import AnimatedSearch from '../screens/Animations/AnimatedSearch';
import SwipeAnimation from '../screens/Animations/SwipeAnimation';

const RootAnimation = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="SplashAnimation"
        initialRouteName="SwipeAnimation"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animation2" component={Animation2} />
        <Stack.Screen name="cartDemo" component={CartDemo} />
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="BasicAnimation" component={BasicAnimation} />
        <Stack.Screen
          name="PanGestureHandlerComp"
          component={PanGestureHandlerComp}
        />
        <Stack.Screen
          name="InterpolateScrollView"
          component={InterpolateScrollView}
        />
        <Stack.Screen
          name="DoubleTapAnimation"
          component={DoubleTapAnimation}
        />
        <Stack.Screen
          name="AnimatedButtonLoader"
          component={AnimatedButtonLoader}
        />
        <Stack.Screen
          name="CircularProgressBar"
          component={CircularProgressBar}
        />
        <Stack.Screen name="RippleEffect" component={RippleEffect} />
        <Stack.Screen name="PerspectiveMenu" component={PerspectiveMenu} />
        <Stack.Screen name="ClockLoader" component={ClockLoader} />
        <Stack.Screen name="AnimatedFlatList" component={AnimatedFlatList} />
        <Stack.Screen
          name="SlidingCounterAnimation"
          component={SlidingCounterAnimation}
        />
        <Stack.Screen name="FlipCardAnimation" component={FlipCardAnimation} />
        <Stack.Screen name="LottieAnimation" component={LottieAnimation} />
        <Stack.Screen name="CircularCarousel" component={CircularCarousel} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="ReactNativeAnimation"
          component={ReactNativeAnimation}
        />
        <Stack.Screen
          name="SplashAnimation"
          component={SplashAnimation}
          // options={{
          //   cardStyleInterpolator: ({current, layouts}) => {
          //     return {
          //       cardStyle: {
          //         transform: [
          //           {
          //             translateX: current.progress.interpolate({
          //               inputRange: [0, 1],
          //               outputRange: [-layouts.screen.width, 0],
          //             }),
          //           },
          //         ],
          //       },
          //     };
          //   },
          // }}
        />
        <Stack.Screen name="SplitAnimation" component={SplitAnimation} />
        <Stack.Screen name="AnimatedSearch" component={AnimatedSearch} />
        <Stack.Screen name="SwipeAnimation" component={SwipeAnimation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootAnimation;

const styles = StyleSheet.create({});
