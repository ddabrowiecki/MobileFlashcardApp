import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleAddQuestion } from "../actions/index";

class AddQuestion extends React.Component {
  state = {
    questionInput: "",
    answerInput: "",
  };

  handleQuestionInput = (questionInput) => {
    this.setState(() => ({
      questionInput,
    }));
  };

  handleAnswerInput = (answerInput) => {
    this.setState(() => ({
      answerInput,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { questionInput, answerInput } = this.state;
    const { dispatch, navigation } = this.props;
    const { deck } = this.props.route.params;

    if (questionInput && answerInput) {
      const deckId = deck.id;
      dispatch(handleAddQuestion(deckId, questionInput, answerInput));
    }

    this.setState(() => ({
      questionInput: "",
      answerInput: "",
    }));

    navigation.navigate("Deck");
  };

  render() {
    const { questionInput, answerInput } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>Question</Text>
        <TextInput
          style={styles.input}
          value={questionInput}
          onChangeText={this.handleQuestionInput}
        ></TextInput>
        <Text style={styles.textHeader}>Answer</Text>
        <TextInput
          style={styles.input}
          value={answerInput}
          onChangeText={this.handleAnswerInput}
        ></TextInput>
        <TouchableOpacity>
          <Text style={styles.deckButton} onPress={this.handleSubmit}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddQuestion);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  deckButton: {
    fontSize: 30,
    padding: 10,
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 6,
    textAlign: "center",
    margin: 10,
    marginTop: 60,
    width: 250,
  },
  textHeader: {
    color: "red",
    fontSize: 50,
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 300,
    height: 40,
    justifyContent: "center",
    borderRadius: 6,
  },
});
