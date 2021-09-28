import React from 'react'
import { StyleSheet, View } from 'react-native'

import StopWatch from '../apps/Stopwatch'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StopWatch navigation={this.props.navigation}/>
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