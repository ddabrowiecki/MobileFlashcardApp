import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { render } from "react-dom";

export default class DeckPreview extends React.Component {
  render() {
    const { deck, navigation } = this.props;
  return (
      <View style={styles.deckWrapper}>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => navigation.navigate("Deck", {deck: deck})}
        >
          <Text style={styles.deckName}>{deck.id}</Text>
          <Text style={styles.cardAmount}>
            {`${deck.questions.length} cards`}
          </Text>
        </TouchableOpacity>
      </View>
  )};
}


const styles = StyleSheet.create({
  deckWrapper: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  deckName: {
    color: "red",
    fontSize: 40,
  },
  cardAmount: {
    fontSize: 20,
  },
});
