import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class LoggedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have logged your last deep work session that lasted 2 hours and 25 minutes.</Text>
        <Text style={styles.text}>You have met 36.2% of your daily deep work goal.</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
          accessibilityLabel="Press this button to go back to the timer"
        ></Button>
        <Button
          title="View records"
          onPress={() => this.props.navigation.navigate("Record")}
          accessibilityLabel="Press this button to view your previous records"
        ></Button>
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