import React from 'react'
import { StyleSheet, View, Button, Text, TextInput } from 'react-native'

import { connect } from 'react-redux'
import { updateGoal } from '../redux/actions'

class SettingsScreen extends React.Component {
  state = {
    goal: '0',
  }

  componentDidMount() {
    this.setState({goal: this.props.goal.toString()})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Input your desired daily deep work goal below:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(goal) => this.setState({goal})}
          value={this.state.goal}
          keyboardType="numeric"
        />
        <Button
          onPress={() => this.props.updateGoal(Number(this.state.goal))}
          //onPress={() => {}}
          title="Update daily goal"
          accessibilityLabel="Button to update daily deep work goal" />
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
    fontSize: 20,
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
  goal: state.goalReducer.goal,
})
export default connect(MapStateToProps, { updateGoal: updateGoal })(SettingsScreen)