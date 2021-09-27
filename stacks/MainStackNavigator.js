import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoggedScreen from './screens/LoggedScreen';
import RecordScreen from './screens/RecordScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Logged" component={LoggedScreen} />
      <Stack.Screen name="Record" component={RecordScreen} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };