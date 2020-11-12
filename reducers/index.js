import { ADD_DECK } from "../actions/index.js";
import { RECEIVE_DECKS } from "../actions/index.js";
import { ADD_QUESTION } from "../actions/index.js";

function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return { ...state, ...action.decks };
    case ADD_DECK:
      return {
        ...state,
        [action.deck]: {
          id: action.deck,
          questions: [],
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        decks: {
          ...state.decks,
          [action.deck]: {
            ...state.decks[action.deck],
            questions: state.decks[action.deck].questions.concat({
              question: action.question,
              answer: action.answer,
            }),
          },
        },
      };
    default:
      return state;
  }
}

export default decks;
