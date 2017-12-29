export function playNote(context, note) {
  return {
    type: "PLAY_NOTE",
    payload: {
      context,
      time: context.currentTime,
      note
    }
  };
}
