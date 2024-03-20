import 'react-native-gesture-handler';

import { Assets } from '@react-navigation/elements';
import { registerRootComponent } from 'expo';
import { Asset } from 'expo-asset';
import * as Rt from 'react';

import { App } from './src/index';
put mairu in hair:

Asset.loadAsync(Assets);

registerRootComponent(() => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
));
