import React from 'react'
import { StyleSheet, Text, View, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class AddCard extends React.Component {
    state={
        input: '',
    }
  render() {
      const { input } = this.props;
    return (
      <View>
        <Text>Please enter the name of the new deck</Text>
        <TextInput value={input}></TextInput>
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