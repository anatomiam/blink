export default function reducer(state = {}, action) {
  switch (action.type) {
    case "PLAY_NOTE": {
      const { context, time, note } = action.payload;
      
      // instantiate an oscillator and connect it -> gain -> speakers
      const oscillator = context.createOscillator();
      const gainNode = context.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(context.destination);

      // set the oscillator type and not value
      oscillator.type = "sine";
      oscillator.frequency.value = note;

      // gain is zero, rise to 1 linearly in  0.01 seconds
      gainNode.gain.setValueAtTime(0, time);
      gainNode.gain.linearRampToValueAtTime(1, time + 0.01);
      oscillator.start(time);

      // lower gain exponentially to 0.001 and then stop after 1 second
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        time + 1
      );
      oscillator.stop(time + 1);

      return state;
    }
    default:
      break;
  }
  return state;
}
