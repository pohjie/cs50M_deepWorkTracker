import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class StopWatch extends React.Component {
  state = {
    timer: null,
    hours: '00',
    secs: '00',
    msecs: '00',
    running: false,
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  start = () => {
    var self = this
    let timer = setInterval(() => {
      var newMsecs = (Number(this.state.msecs) + 1).toString()
      var newSecs = this.state.secs

      if (Number(this.state.msecs) == 99) {
        newSecs = (Number(this.state.secs) + 1).toString()
        newMsecs = '00'
      }

      var newHours = this.state.hours
      if (Number(this.state.secs) == 59 && Number(this.state.msecs) == 99) {
        newHours = (Number(this.state.hours) + 1).toString()
        newSecs = '00'
      }
      self.setState({
        hours: newHours.length == 1 ? '0' + newHours : newHours,
        secs: newSecs.length == 1 ? '0' + newSecs : newSecs,
        msecs: newMsecs.length == 1 ? '0' + newMsecs : newMsecs
      })
    }, 0)

    this.setState({ timer })
  }

  onButtonStart = () => {
    this.start()
    this.setState({ running: true })
  }

  onButtonStop = () => {
    clearInterval(this.state.timer)
    this.setState({ running: false })
  }

  onButtonReset = () => {
    this.setState({
      timer: null,
      hours: '00',
      secs: '00',
      msecs: '00',
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{this.state.hours}</Text>
          <Text style={styles.title}>:</Text>
          <Text style={styles.title}>{this.state.secs}</Text>
          <Text style={styles.title}>:</Text>
          <Text style={styles.title}>{this.state.msecs}</Text>
        </View>
        <View style={styles.row}>
          <Button title="Start" 
                  onPress={this.onButtonStart} 
                  accessibilityLabel="Start button"></Button>
          <Button title="Stop" 
                  onPress={this.onButtonStop}
                  accessibilityLabel="Stop button"></Button>
          <Button title="Reset"
                  onPress={this.onButtonReset}
                  accessibilityLabel="Reset button"></Button>
        </View>
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
  title: {
    textAlign: 'center',
    fontSize: 48,
    fontVariant: ['tabular-nums'],
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
})