import { ADD_QUESTION } from '../actions/index.js'

function addQuestion (state={}, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return {...state, 
                [action.deck]: {
                    ...state[action.deck],
                    questions: state[action.deck].questions.concat({question: action.question, answer: action.answer}) 
                }}
        default:
            return state
    }
}

export default addQuestion