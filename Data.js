let decks = {
  react: {
    id: "React",
    questions: [
      { question: "What is a component?", answer: "A piece of React" },
      { question: "What is Redux?", answer: "A state manager" },
    ],
  },
  sailing: {
    id: "Sailing",
    questions: [{ question: "What is a sail?", answer: "The go material" }],
  },
};

export function _getDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...decks }), 1000);
  });
}
