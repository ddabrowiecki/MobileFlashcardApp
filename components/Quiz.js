import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

export default class Quiz extends React.Component {
  state = {
    showAnswer: false,
    index: 0,
    correctAnswers: 0,
    questionsRemaining: 0,
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };

  handleYes = () => {

  }

  handleNo = () => {

  }

  handleQuestionsRemaining = (numberQuestions) => {
    this.setState({ questionsRemaining: numberQuestions })
  }

  handleNextQuestion = () => {
    this.setState({ 
      index: this.state.index + 1, 
      showAnswer: false, 
      questionsRemaining: this.state.questionsRemaining - 1 });
  };

  componentDidMount () {
    this.handleQuestionsRemaining(this.props.route.params.deck.questions.length)
  }

  render() {
    const { deck } = this.props.route.params;
    const { showAnswer, index, questionsRemaining } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        {index === deck.questions.length && (
          <View>
            <Text style={styles.answer}>All done!</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate("HomeScreen")}
            style={styles.deckButton}>
              <Text>Back to Main Menu</Text>
            </TouchableOpacity>
          </View>
        )}
        {deck.questions.slice(index, index + 1).map((entry) => {
          return (
            <View key={entry.question}>
              <Text>{questionsRemaining} questions remaining</Text>
              <Text style={styles.question}>{entry.question}</Text>
              {showAnswer ? (
                <View>
                  <Text style={styles.answer}>{entry.answer}</Text>
                </View>
              ) : (
                <TouchableOpacity
                  onPress={this.handleShowAnswer}
                  style={styles.deckButton}
                >
                  <Text>Answer</Text>
                </TouchableOpacity>
              )}
              <Text> Was your answer correct? </Text>
              <TouchableOpacity
                onPress={this.handleYes}
                style={styles.deckButton}
              >
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.handleNo}
                style={styles.deckButton}
              >
                <Text>No</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={this.handleNextQuestion}
                style={styles.deckButton}
              >
                <Text>Next Question</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // deckWrapper: {
  //   flex: 1,
  //   padding: 10,
  //   justifyContent: "center",
  // },
  question: {
    color: "red",
    fontSize: 40,
  },
  answer: {
    fontSize: 20,
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
