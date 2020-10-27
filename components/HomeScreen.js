import React from 'react'
import { connect } from 'react-redux'
import Deck from '../components/Deck'
import { handleGetDecks } from '../actions'
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
    componentDidMount() {
    this.props.dispatch(handleGetDecks());
    }
  render() {
      return (
      <View>
          <Deck />
      </View>
  )
      }
}

export default connect()(HomeScreen)