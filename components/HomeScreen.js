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
                <DeckPreview deck={deck} />
              </Text>
            );
          })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    backgroundColor: "red",
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 50,
    borderColor: "black",
    margin: 5,
  },
});

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(HomeScreen);
