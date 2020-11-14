import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

export default class Quiz extends React.Component {
  state = {
    showAnswer: false,
    index: 0,
    correctAnswers: 0,
    questionsRemaining: 0,
    yesSelected: false,
    noSelected: false,
  };

  handleShowAnswer = () => {
    this.setState({
      showAnswer: true,
    });
  };

  handleYes = () => {
    this.state.noSelected
      ? this.setState({
          noSelected: false,
          yesSelected: true,
        })
      : this.setState({
          yesSelected: true,
        });
  };

  handleNo = () => {
    this.state.yesSelected
      ? this.setState({
          noSelected: true,
          yesSelected: false,
        })
      : this.setState({
          noSelected: true,
        });
  };

  handleQuestionsRemaining = (numberQuestions) => {
    this.setState({ questionsRemaining: numberQuestions });
  };

  handleNextQuestion = () => {
    this.setState({
      index: this.state.index + 1,
      showAnswer: false,
      questionsRemaining: this.state.questionsRemaining - 1,
      yesSelected: false,
      noSelected: false,
    });
    this.state.yesSelected &&
      this.setState({
        correctAnswers: this.state.correctAnswers + 1,
      });
  };

  handleEndQuiz = () => {
    const { navigation } = this.props;
    navigation.navigate("HomeScreen");
    this.setState({
      correctAnswers: 0,
    });
  };

  handleRestartQuiz = () => {
    this.setState({
      correctAnswers: 0,
      index: 0,
    });
    this.handleQuestionsRemaining(
      this.props.route.params.deck.questions.length
    );
  };

  componentDidMount() {
    this.handleQuestionsRemaining(
      this.props.route.params.deck.questions.length
    );
  }

  render() {
    const { deck } = this.props.route.params;
    const {
      showAnswer,
      index,
      questionsRemaining,
      correctAnswers,
      yesSelected,
      noSelected,
    } = this.state;
    const { navigation } = this.props;
    return (
      <View>
        {index === deck.questions.length && (
          <View>
            <Text style={styles.answer}>All done!</Text>
            <Text>You got {correctAnswers} right!</Text>
            <TouchableOpacity
              onPress={this.handleEndQuiz}
              style={styles.deckButton}
            >
              <Text>Back to Main Menu</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.handleRestartQuiz}
              style={styles.deckButton}
            >
              <Text>Restart Quiz</Text>
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
              <View style={styles.yesNoWrapper}>
                <TouchableOpacity
                  onPress={this.handleYes}
                  style={
                    yesSelected ? styles.yesNoSelected : styles.yesNoButton
                  }
                >
                  <Text>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.handleNo}
                  style={noSelected ? styles.yesNoSelected : styles.yesNoButton}
                >
                  <Text>No</Text>
                </TouchableOpacity>
              </View>
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
  yesNoWrapper: {
    justifyContent: "space-around",
    flexDirection: "row",
  },

  yesNoButton: {
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
    margin: 10,
    padding: 10,
  },

  yesNoSelected: {
    borderColor: "red",
    borderWidth: 4,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "red",
  },

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
