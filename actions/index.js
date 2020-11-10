export const SET_DECKS = "SET_DECKS"
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK"
export const ADD_QUESTION = "ADD_QUESTION"

import { getDecks } from '../utils/api.js'

export function handleGetDecks() {
  return (dispatch) => {
    getDecks().then(( decks ) => {
      dispatch(receiveDecks(decks));
    });
  };
}

export function receiveDecks(decks) {
    return {
      type: RECEIVE_DECKS,
      decks,
    };
  }

export function addDeckToStore(deck) {
    return {
      type: ADD_DECK,
      deck,
    }
}

export function addQuestionToStore(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

  export function handleAddDeck(deck) {
    return (dispatch) => {
      addDeck(deck).then(( deck ) => {
        dispatch(addDeckToStore(deck));
      });
    };
  }

  export function handleAddQuestion(deck, question, answer) {
    return (dispatch) => {
      addQuestion(deck, question, answer).then(( question ) => {
        console.log(question)
        dispatch(addQuestionToStore(question));
      });
    };
  }