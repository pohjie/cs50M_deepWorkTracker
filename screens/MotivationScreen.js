import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class MotivationScreen extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Motivation Time!</Text>
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