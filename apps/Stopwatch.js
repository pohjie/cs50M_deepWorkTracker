import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { connect } from 'react-redux'
import { addSession } from '../redux/actions'

class StopWatch extends React.Component {
  state = {
    timer: null,
    hours: '00',
    mins: '00',
    secs: '00',
    running: false,
  }

  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  start = () => {
    var self = this
    let timer = setInterval(() => {
      var newSecs = (Number(this.state.secs) + 1).toString()
      var newMins = this.state.mins

      if (Number(this.state.secs) == 59) {
        newMins = (Number(this.state.mins) + 1).toString()
        newSecs = '00'
      }

      var newHours = this.state.hours
      if (Number(this.state.mins) == 59 && Number(this.state.secs) == 59) {
        newHours = (Number(this.state.hours) + 1).toString()
        newMins = '00'
      }
      self.setState({
        hours: newHours.length == 1 ? '0' + newHours : newHours,
        mins: newMins.length == 1 ? '0' + newMins : newMins,
        secs: newSecs.length == 1 ? '0' + newSecs : newSecs
      })
    }, 1000)

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
    this.onButtonStop()
    this.setState({
      timer: null,
      hours: '00',
      mins: '00',
      secs: '00',
    })
  }

  handleLogging = (mins) => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let date = dd + "/" + mm

    let newDateArr = [...this.props.dateArr]
    let newLoggedTimeArr = [...this.props.loggedTimeArr]

    if (newDateArr[newDateArr.length - 1] === date) {
      newLoggedTimeArr[newLoggedTimeArr.length - 1] += mins
    } else {
      newDateArr.push(date)
      newLoggedTimeArr.push(mins)
    }

    this.props.addSession({newDateArr: newDateArr, newLoggedTimeArr: newLoggedTimeArr})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{this.state.hours}</Text>
          <Text style={styles.title}>:</Text>
          <Text style={styles.title}>{this.state.mins}</Text>
          <Text style={styles.title}>:</Text>
          <Text style={styles.title}>{this.state.secs}</Text>
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
        <View style={styles.row}>
          <Button title="Log"
            onPress={() => {
              const hours = this.state.hours
              const mins = this.state.mins
              this.onButtonReset
              this.handleLogging(Number(hours) * 60 + Number(mins))
              this.props.navigation.navigate("Logged",
                {
                  hours: hours,
                  mins: mins
                })
            }}
            accessibilityLabel="Log your deep work time"></Button>
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
    color: 'white',
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

const MapStateToProps = state => ({
  dateArr: state.timeReducer.dateArr,
  loggedTimeArr: state.timeReducer.loggedTimeArr,
  goal: state.goalReducer,
})
export default connect(MapStateToProps, { addSession: addSession })(StopWatch)