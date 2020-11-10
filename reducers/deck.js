import { ADD_DECK } from '../actions/index.js'

function addDeck (state={}, action) {
    switch (action.type) {
        case ADD_DECK:
            return {...state, 
                [action.deck]: {
                    id: action.deck,
                    questions: [],
                }}
        default:
            return state
    }
}

export default addDeck