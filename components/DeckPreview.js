import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

export default function DeckPreview(props) {
    const navigation = useNavigation()
  return (
      <View style={styles.deckWrapper}>
        <TouchableOpacity
          style={styles.deckButton}
          onPress={() => navigation.navigate("Deck", {deck: props.deck})}
        >
          <Text style={styles.deckName}>{props.deck.id}</Text>
          <Text style={styles.cardAmount}>
            {`${props.deck.questions.length} cards`}
          </Text>
        </TouchableOpacity>
      </View>
  );
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
