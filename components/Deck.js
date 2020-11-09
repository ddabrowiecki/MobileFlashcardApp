import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class Deck extends React.Component {
  render() {
    const { deck } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <View style={styles.deckView}>
        <View style={styles.deckTop}>
          <Text style={styles.deckName}>{deck.id}</Text>
          <Text
            style={styles.cardAmount}
          >{`${deck.questions.length} cards`}</Text>
        </View>
        <View style={styles.deckBottom}>
          <TouchableOpacity 
          style={styles.deckButton}
          onPress={() => navigation.navigate("AddQuestion")}>
            <Text>Add Question</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deckButton}
            onPress={() => navigation.navigate("Quiz", { deck: deck })}
          >
            <Text>Start Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deckButton}>
            <Text>Delete Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Deck);

const styles = StyleSheet.create({
  deckView: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
  },
  deckName: {
    color: "red",
    fontSize: 50,
  },
  cardAmount: {
    fontSize: 30,
  },
  deckTop: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  deckBottom: {
    marginBottom: 100,
  },
  deckButton: {
    fontSize: 30,
    padding: 10,
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 6,
    textAlign: "center", 
    margin: 10,
    width: 250,
  },
});
