export const SET_DECKS = "SET_DECKS";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";
export const DELETE_DECK = "DELETE_DECK"

import { getDecks, addDeck, addQuestion, deleteDeck } from "../utils/api.js";

export function handleGetDecks() {
  return (dispatch) => {
    getDecks().then((decks) => {
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
  };
}

export function addQuestionToStore(deck, question, answer) {
  return {
    type: ADD_QUESTION,
    deck,
    question,
    answer,
  };
}

export function deleteDeckInStore(deck) {
  return {
    type: DELETE_DECK,
    deck,
  }
}

export function handleAddDeck(deck) {
  return (dispatch) => {
    addDeck(deck).then(dispatch(addDeckToStore(deck)));
  };
}

export function handleAddQuestion(deck, question, answer) {
  return (dispatch) => {
    addQuestion(deck, question, answer).then(
      dispatch(addQuestionToStore(deck, question, answer))
    );
  };
}

export function handleDeleteDeck(deck) {
  return (dispatch) => {
    deleteDeck(deck).then(
      dispatch(deleteDeckInStore(deck))
      )
    }
  };
