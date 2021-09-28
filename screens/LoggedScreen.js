import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { connect } from 'react-redux';
import store from '../redux/store'
import { retrieveDay, retrieveGoal } from '../redux/selectors'

export default class LoggedScreen extends React.Component {
  render() {
    const day = retrieveDay(store.getState())
    const goal = retrieveGoal(store.getState())

    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have logged your last deep work session that lasted 2 hours and 25 minutes.</Text>
        <Text style={styles.text}>You have met {Math.round((day / goal) * 1000) / 10 }% of your daily deep work goal.</Text>
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