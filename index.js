/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RootSocialApp from './src/root';
import Root from './src2/root';
import 'react-native-gesture-handler';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Root);
AppRegistry.registerComponent(appName, () => RootSocialApp);
