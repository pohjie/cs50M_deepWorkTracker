import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator } from './MainStackNavigator';
import RecordScreen from '../screens/RecordScreen';
import MotivationScreen from '../screens/MotivationScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timer" component={MainStackNavigator} />
      <Tab.Screen name="Record" component={RecordScreen} />
      <Tab.Screen name="Motivation" component={MotivationScreen} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator }