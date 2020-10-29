import React from 'react'
import { connect } from 'react-redux'
import DeckPreview from '../components/DeckPreview'
import { handleGetDecks } from '../actions'
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends React.Component {
    componentDidMount() {
    this.props.dispatch(handleGetDecks());
    }
  render() {
      const { decks } = this.props;
      const deckArray = [];
      for ( const key in decks) {
          deckArray.push(decks[key])
      }
      return (
      <View>
          {deckArray && deckArray.map((deck) => {
              return (<Text>
              <DeckPreview key={deck.id} deck={deck} />
              </Text>)
          })}
      </View>
  )
      }
}

function mapStateToProps ({ decks }) {
    return {
        decks,
    }
}

export default connect(mapStateToProps)(HomeScreen)