import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

export default class Quiz extends React.Component {
  render() {
    const { deck } = this.props.route.params;
    return (
      <View>
        {deck.questions.map((question) => {
          return (
            <View key={question.question}>
              <Text>{question.question}</Text>
              <TouchableOpacity>Answer</TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
