let decks = {
    react: {
        id: "react",
        questions: [{ question: "What is a component?", answer: "A piece of React" }],
    },
    sailing: {
        id: "sailing",
        questions: [{ question: "What is a sail?", answer: "The go material" }],
    },
};


export function _getDecks () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...decks}), 1000)
    })
  }