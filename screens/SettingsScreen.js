import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

import { connect } from 'react-redux'

class SettingsScreen extends React.Component {
  state = {
    goal: this.props.goal.toString()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Input your desired daily deep work goal below:</Text>
        <TextInput
          style={styles.input}
          onChangeText={() => { }}
          value={this.state.goal}
          keyboardType="numeric"
        />
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
    color: 'white',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'grey',
    color: 'white',
    height: 40,
    margin: 12,
    width: 100,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
  },
})

const MapStateToProps = state => ({
  goal: state.goal,
})
export default connect(MapStateToProps)(SettingsScreen)