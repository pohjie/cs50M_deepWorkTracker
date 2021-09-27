import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import LoggedScreen from './screens/LoggedScreen';
import RecordScreen from './screens/RecordScreen';
import MotivationScreen from './screens/MotivationScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Logged" component={LoggedScreen} />
      </Stack.Navigator>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Record" component={RecordScreen} />
        <Tab.Screen name="Motivation" component={MotivationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}