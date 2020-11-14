import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import HomeScreen from "./components/HomeScreen";
import Deck from "./components/Deck";
import Quiz from "./components/Quiz";
import AddQuestion from "./components/AddQuestion";
import AddDeck from "./components/AddDeck";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import middleware from "./middleware";
import { MOBILE_FLASHCARD_KEY } from "./utils/api.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLocalNotification } from "./utils/helpers";
import { render } from "react-dom";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(middleware));

// store.subscribe(() => AsyncStorage.setItem(
//   MOBILE_FLASHCARD_KEY,JSON.stringify(store.getState())
//   )
// )

const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Deck" component={Deck} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="AddQuestion" component={AddQuestion} />
            <Stack.Screen name="AddDeck" component={AddDeck} />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}
