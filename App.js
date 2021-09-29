import React from 'react';

import { Provider } from 'react-redux'
import store from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './stacks/MainTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <BottomTabNavigator />
      </Provider>
    </NavigationContainer>
  );
}