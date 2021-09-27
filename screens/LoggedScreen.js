import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class LoggedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have logged your last deep work session that lasted 2 hours and 25 minutes.</Text>
        <Text style={styles.text}>You have met 36.2% of your daily deep work goal.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 5,
  }
})