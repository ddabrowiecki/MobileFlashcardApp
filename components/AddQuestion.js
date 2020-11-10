import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleAddQuestion } from "../actions/index"

class AddQuestion extends React.Component {
  state = {
    questionInput: "",
    answerInput: "",
  };

  handleQuestionInput = (questionInput) => {
    this.setState(() => ({
      questionInput,
    }))
  }

  handleAnswerInput = (answerInput) => {
    this.setState(() => ({
      answerInput,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { questionInput, answerInput} = this.state
    const { dispatch, navigation } = this.props;
    const { deck } = this.props.route.params
    
    if (questionInput && answerInput) {
      const deckId = deck.id
      const lowercaseDeck = deckId.toLowerCase()
      dispatch(handleAddQuestion(lowercaseDeck, questionInput, answerInput));
    }

    this.setState(() => ({
      questionInput: "",
      answerInput: "",
    }));

    navigation.navigate("Deck")
  }

  render() {
    const { questionInput, answerInput } = this.props;
    return (
      <View>
        <Text>Question</Text>
        <TextInput value={questionInput} onChangeText={this.handleQuestionInput}></TextInput>
        <Text>Answer</Text>
        <TextInput value={answerInput} onChangeText={this.handleAnswerInput}></TextInput>
        <TouchableOpacity>
          <Text style={styles.deckButton} onPress={this.handleSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddQuestion)

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
