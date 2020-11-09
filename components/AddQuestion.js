import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AddCard extends React.Component {
  render() {
    return (
      <View>
        <Text>Question</Text>
        <Text>Answer</Text>
        <TouchableOpacity>
        <Text style={styles.deckButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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