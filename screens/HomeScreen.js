import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import StopWatch from '../apps/Stopwatch'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StopWatch />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})