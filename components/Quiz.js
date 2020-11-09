import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

export default class Quiz extends React.Component {
  state = {
    showAnswer: false,
    index: 0,
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };

  handleNextQuestion = () => {
    this.setState({index: this.state.index + 1})
  }

  render() {
    const { deck } = this.props.route.params;
    const { showAnswer, index } = this.state;
    return (
      <View>
        {deck.questions.slice(index, index + 1).map((entry) => {
          return (
            <View key={entry.question}>
              <Text>{entry.question}</Text>
              <TouchableOpacity onPress={this.handleShowAnswer}>
                <Text>Answer</Text>
              </TouchableOpacity>
              {showAnswer && (
                <View>
                  <Text>{entry.answer}</Text>
                </View>
              )}
              <TouchableOpacity onPress={this.handleNextQuestion}><Text>Next Question</Text></TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}
