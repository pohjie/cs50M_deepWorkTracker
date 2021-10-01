import React from 'react'
import { StyleSheet, View } from 'react-native'
import { LineChart, ProgressChart } from 'react-native-chart-kit'

import { chartConfig, screenWidth } from '../config'
import { connect } from 'react-redux'

class RecordScreen extends React.Component {
  state = {
    progress: {
      labels: ['Today', 'Week', 'Month'],
      data: [(this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / this.props.goal,
      (this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / (this.props.goal * 7),
      (this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / (this.props.goal * 30)],
    },
    prevRecord: {
      labels: this.props.dateArr.slice(-5),
      datasets: [
        {
          data: this.props.loggedTimeArr.slice(-5),
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      legend: ["Deep Work Records"], // optional
    },
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.refreshProgress()
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  refreshProgress = () => {
    let progress = { ...this.state.progress }
    progress.data = [(this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / this.props.goal,
    (this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / (this.props.goal * 7),
    (this.props.loggedTimeArr[this.props.loggedTimeArr.length - 1] || 0) / (this.props.goal * 30)]
    this.setState({ progress })
  }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          data={this.state.prevRecord}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        <ProgressChart
          data={this.state.progress}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  picker: {
    height: 10,
    width: 150,
  },
})

const MapStateToProps = state => ({
  loggedTimeArr: state.timeReducer.loggedTimeArr,
  dateArr: state.timeReducer.dateArr,
  goal: state.goalReducer.goal,
})
export default connect(MapStateToProps)(RecordScreen)