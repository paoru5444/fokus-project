const startSong = new Audio("../../sons/play.wav");
const pauseSong = new Audio("../../sons/pause.mp3");
const finishSong = new Audio("../../sons/beep.mp3");

let interval = null;
let duration = 10;

const intervalHandler = {
  countdown: function () {
    if (duration === 0) {
      finishSong.play();
      return;
    }

    duration -= 1;
  },
  startCountdown: function () {
    startSong.play();
    interval = setInterval(this.countdown, 1000);
  },
  stopCountdown: function () {
    pauseSong.play();
    clearInterval(interval);
    interval = null;
  },
};

export function handleCountdown() {
  if (interval) {
    intervalHandler.stopCountdown();
  } else {
    intervalHandler.startCountdown();
  }
}
