import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainNavigation from '../navigation';
import Home from '../screens/Home';
const RootSocialApp = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootSocialApp;
