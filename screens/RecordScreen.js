import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { LineChart, ProgressChart } from 'react-native-chart-kit'

import { connect } from 'react-redux'

// prevRecord
const prevRecord = {
  labels: ["21/9", "22/9", "23/9", "24/9", "25/9", "26/9"],
  datasets: [
    {
      data: [2, 4.5, 2.8, 5, 3.3, 4.3],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Deep Work Records"], // optional
};

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};
const screenWidth = Dimensions.get("window").width

// progressRing
// const progress = {
//   labels: ['Today', 'Week', 'Month'],
//   data: [this.props.day / this.props.goal,
//          0.21, 
//          0.07],
// }

class RecordScreen extends React.Component {
  state = {
    progress: {
      labels: ['Today', 'Week', 'Month'],
      data: [this.props.day / this.props.goal,
             0.21, 
             0.07],
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <LineChart
          data={prevRecord}
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
  day: state.day,
  goal: state.goal,
})
export default connect(MapStateToProps)(RecordScreen)