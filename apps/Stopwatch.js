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
        hours: newHours.length == 1 ? '0'+newHours : newHours,
        secs: newSecs.length == 1 ? '0'+newSecs : newSecs,
        msecs: newMsecs.length == 1 ? '0'+newMsecs : newMsecs
      })
    }, 0)

    this.setState({timer})
  }

  onButtonStart = () => {
    this.start()
    this.setState({running: true})
  }

  onButtonStop = () => {
    clearInterval(this.state.timer)
    this.setState({running: false})
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
      <View>
        <Text>{this.state.hours}:{this.state.secs}:{this.state.msecs}</Text>
        <Button title="Start" onPress={this.onButtonStart}></Button>
        <Button title="Stop" onPress={this.onButtonStop}> </Button>
        <Button title="Reset" onPress={this.onButtonReset}></Button>
      </View>
    )
  }
}