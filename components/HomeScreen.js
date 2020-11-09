import React from "react";
import { connect } from "react-redux";
import DeckPreview from "../components/DeckPreview";
import { handleGetDecks } from "../actions";
import { StyleSheet, Text, View } from "react-native";

class HomeScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleGetDecks());
  }
  render() {
    const { decks } = this.props;
    const deckArray = [];
    for (const key in decks) {
      deckArray.push(decks[key]);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Dom's Flashcards</Text>
        {deckArray &&
          deckArray.map((deck) => {
            return (
              <Text key={deck.id}>
                <DeckPreview deck={deck} style={styles.deckPreview} />
              </Text>
            );
          })}
      </View>
    );
  }
}

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: "red",
    color: "white",
    borderRadius: 6,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    borderColor: "black",
    margin: 5,
  },
  deckPreview: {
    flex: 1,
    alignItems: "center",
  },
});