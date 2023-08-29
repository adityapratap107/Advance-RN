import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {AppState} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {checkToken} from '../api/User';
import MainNavigation from '../navigation/MainNavigation';
import RootNavigation from '../navigation/RootNavigation';
import store, {persistor} from '../redux/store';
import BootSplash from 'react-native-bootsplash';

const RootDonationApp = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // we are coming from background to foreground
          console.log('You have come back into the app');
          await checkToken();
        }
        appState.current = nextAppState;
      },
    );
    checkToken();
    return () => {
      subscription.remove();
    };
  }, []);
  
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default RootDonationApp;
