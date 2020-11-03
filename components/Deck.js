import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

class Deck extends React.Component {
  render() {
    const { deck } = this.props.route.params
    const { navigation } = this.props
    return (
      <View>
        <Text>{deck.id}</Text>
        <Text>{`${deck.questions.length} cards`}</Text>
        <Text>Add Card</Text>
        <Text
        onPress={() => navigation.navigate("Quiz", {deck: deck})}
        >Start Quiz</Text>
        <Text>Delete Deck</Text>
      </View>
    );
  }
}

export default connect()(Deck)
