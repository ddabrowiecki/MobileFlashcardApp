import AsyncStorage from "@react-native-async-storage/async-storage";

let initialData = {
  decks: {
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
  },
};

const MOBILE_FLASHCARD_KEY = "MobileFlashcards";

export async function setDecks() {
  const stringDecks = JSON.stringify(initialData);
  return await AsyncStorage.setItem(MOBILE_FLASHCARD_KEY, stringDecks);
}

export function handleSetDecks() {
  return setDecks();
}

export function getDecks() {
  return AsyncStorage.getItem(MOBILE_FLASHCARD_KEY).then((res) => {
    const decks = JSON.parse(res);
    return decks;
  });
}

export function addDeck({ deck }) {
  return AsyncStorage.mergeItem(
    MOBILE_FLASHCARD_KEY,
    JSON.stringify({
      deck,
    })
  );
}

export function addQuestion({ question }) {}
