import { getDecks } from '../API.js'
import { receiveDecks } from './decks'

export function handleGetDecks() {
    return (dispatch) => {
      getDecks().then(({ decks }) => {
        dispatch(receiveDecks(decks));
      });
    };
  }