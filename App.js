import React from 'react';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

import { Provider } from 'react-redux'
import {store, persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './stacks/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BottomTabNavigator />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}