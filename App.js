import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './components/Deck'
import { handleGetDecks } from './actions/shared'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default function App() {
    
  dispatch(handleGetDecks());
  console.log(handleGetDecks())

  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <Deck />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
