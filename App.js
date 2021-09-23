import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LoggedScreen from './screens/LoggedScreen';
import RecordScreen from './screens/RecordScreen';

export default function App() {
  return (
    <RecordScreen />
  );
}