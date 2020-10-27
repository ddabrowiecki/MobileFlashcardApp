export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK"

import { getDecks } from '../API.js'

export function handleGetDecks() {
  return (dispatch) => {
    getDecks().then(({ decks }) => {
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