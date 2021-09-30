import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { fetchQuote } from '../api'

export default class MotivationScreen extends React.Component {
  state = {
    quote: '',
    author: '',
  }

  getQuote = async () => {
    let {quote, author} = await fetchQuote()
    this.setState({quote})
    this.setState({author})
  }

  componentDidMount() {
    this.getQuote()
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.quote}</Text>
        <Text style={{color: 'white'}}>{this.state.author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontStyle: 'italic',
  }
})