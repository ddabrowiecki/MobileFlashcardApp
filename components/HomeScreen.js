import React from "react";
import { connect } from "react-redux";
import DeckPreview from "../components/DeckPreview";
import { handleGetDecks } from "../actions";
import { handleSetDecks, checkStorage } from "../utils/api.js";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

class HomeScreen extends React.Component {
  componentDidMount() {
    handleSetDecks().then(this.props.dispatch(handleGetDecks()));
  }

  render() {
    const { decks, navigation } = this.props;
    const deckArray = [];
    for (const key in decks) {
      deckArray.push(decks[key]);
    }
    return (
      <View style={{ flex: 1 }}>
        <ScrollView 
        contentContainerStyle={styles.container}
        style={{flex: 1}}>
            <Text style={styles.header}>Dom's Flashcards</Text>

            {deckArray &&
              deckArray.map((deck) => {
                return (
                  <Text key={deck.id}>
                    <DeckPreview
                      deck={deck}
                      style={styles.deckPreview}
                      navigation={navigation}
                    />
                  </Text>
                );
              })}
            <TouchableOpacity
              style={styles.deckButton}
              onPress={() => navigation.navigate("AddDeck")}
            >
              <Text>Add Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deckButton}
              onPress={() => console.log(this.props.decks)}
            >
              <Text>Storage</Text>
            </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

function HomeScreenWrapper(props) {
  const navigation = useNavigation();

  return <HomeScreen {...props} navigation={navigation} />;
}

function mapStateToProps({ decks }) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(HomeScreenWrapper);

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    backgroundColor: "red",
    color: "white",
    borderRadius: 6,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    borderColor: "black",
    margin: 5,
  },
  deckPreview: {
    flex: 1,
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
    width: 250,
  },
});
