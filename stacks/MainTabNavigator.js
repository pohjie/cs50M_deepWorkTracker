import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator } from './MainStackNavigator';
import RecordScreen from '../screens/RecordScreen';
import MotivationScreen from '../screens/MotivationScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Timer"
        component={MainStackNavigator}
        options={{
          tabBarIcon: () => (
            <Ionicons name="stopwatch" size={24} color="white" />
          )
        }} />
      <Tab.Screen name="Record"
        component={RecordScreen}
        options={{
          tabBarIcon: () => (
            <Entypo name="book" size={24} color="white" />
          )
        }} />
      <Tab.Screen name="Motivation"
        component={MotivationScreen}
        options={{
          tabBarIcon: () => (
            <Foundation name="mountains" size={24} color="white" />
          )
        }} />
      <Tab.Screen name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons name="settings" size={24} color="white" />
          )
        }} />
    </Tab.Navigator>
  );
};

export { BottomTabNavigator }