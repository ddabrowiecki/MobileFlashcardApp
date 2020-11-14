import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { handleAddDeck, addDeckToStore } from "../actions/index" 

class AddDeck extends React.Component {
  state = {
    input: "",
  };

  handleTextInput = (input) => {
    this.setState({
      input,
    });
  };

  handleLowercaseInput = (input) => {
    const newInput = input.toLowerCase()
    return newInput
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { input} = this.state
    const { dispatch, navigation } = this.props;
    
    if (input) {
      const lowercaseInput = this.handleLowercaseInput(input)
      dispatch(handleAddDeck(lowercaseInput));
    }

    navigation.navigate("Deck", {deck: this.handleLowercaseInput(input)})

    this.setState(() => ({
      input: "",
    }));

  }

  render() {
    const { input } = this.props;
    return (
      <View>
        <Text>Please enter the name of the new deck</Text>
        <TextInput value={input} onChangeText={this.handleTextInput}></TextInput>
        <TouchableOpacity>
          <Text style={styles.deckButton} onPress={this.handleSubmit}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddDeck)

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
