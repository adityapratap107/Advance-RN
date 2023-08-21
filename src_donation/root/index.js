import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigation from '../navigation/MainNavigation';

const RootDonationApp = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootDonationApp;
