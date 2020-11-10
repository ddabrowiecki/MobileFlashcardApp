

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...decks }), 1000);
  });
}

export function _addDeck(deck) {
  return new Promise((res, rej) => {
    setTimeout(() => res(
      decks = {
        ...decks,
        [deck]: {
          id: String(deck),
          questions: [],
        }
      }
    ), 1000)
  })
}

export function _addQuestion(deck, newQuestion, newAnswer) {
  const questionObject = {question: newQuestion, answer: newAnswer}
  return new Promise((res, rej) => {
    setTimeout(() => {
      decks = {
        ...decks,
        [deck]: {
          ...decks[deck],
          questions: decks[deck].questions.push(questionObject)
        }
      }

      res(decks)
    }, 1000)
  })
}


