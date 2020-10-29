import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from "react-navigation";

const deck = {
  id: "React",
  questions: [
    { question: "What is a component?", answer: "A piece of React" },
    { question: "What is Redux?", answer: "A state manager" },
  ],
}

const Stack = createStackNavigator()
export default class Deck extends React.Component {
  render() {
    return (
      <View>
        <Text>{deck.id}</Text>
        <Text>{`${deck.questions.length} cards`}</Text>
        <Text>Add Card</Text>
        <Text>Start Quiz</Text>
        <Text>Delete Deck</Text>
      </View>
    );
  }
}
