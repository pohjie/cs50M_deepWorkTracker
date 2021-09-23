import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default class RecordScreen extends React.Component {
  state = {
    selectedDuration: 'daily',
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.selectedDuration}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => this.setState({ selectedDuration: itemValue })}
        >
          <Picker.Item label="Daily" value="daily" />
          <Picker.Item label="Weekly" value="weekly" />
          <Picker.Item label="Monthly" value="monthly" />
        </Picker>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
  },
  picker: {
    height: 10,
    width: 150,
  },
})