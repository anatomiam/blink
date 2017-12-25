export function addToMessage(letter) {
  return {
    type: "ADD_TO_MESSAGE",
    payload: {
      letter
    }
  };
}
