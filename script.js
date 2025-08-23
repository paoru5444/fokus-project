import {
  FOCUS_TITLE,
  SHORT_BREAK_TITLE,
  LONG_BREAK_TITLE,
} from "./constants.js";

const backtrack = new Audio("./sons/luna-rise-part-one.mp3");
const beep = new Audio("./sons/beep.mp3");
const play = new Audio("./sons/play.wav");
const pause = new Audio("./sons/pause.mp3");

backtrack.loop = true;

const html = document.querySelector("html");

// header
const headerImage = document.querySelector(".app__image");
const headerTitleRegular = document.querySelector(".app__title-regular");
const headerTitleStrong = document.querySelector(".app__title-strong");

// buttons
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortBreak = document.querySelector(".app__card-button--curto");
const buttonLongBreak = document.querySelector(".app__card-button--longo");
const buttons = document.querySelectorAll(".app__card-button");
const buttonMusic = document.querySelector("#alternar-musica");
const buttonStartStopTimer = document.querySelector("#start-pause");
const labelStartStopTimer = document.querySelector("#start-pause span");
const labelStartStopImage = document.querySelector("#start-pause img");

// timer
const timer = document.querySelector("#timer");
let interval = null;

const focusTime = 1500;
const shortBreakTime = 300;
const longBreakTime = 900;
let timeInMiliseconds = focusTime;

function changeHeaderTitle(context) {
  switch (context) {
    case "foco":
      headerTitleRegular.innerHTML = FOCUS_TITLE.regular;
      headerTitleStrong.innerHTML = FOCUS_TITLE.strong;
      break;
    case "descanso-curto":
      headerTitleRegular.innerHTML = SHORT_BREAK_TITLE.regular;
      headerTitleStrong.innerHTML = SHORT_BREAK_TITLE.strong;
      break;
    case "descanso-longo":
      headerTitleRegular.innerHTML = LONG_BREAK_TITLE.regular;
      headerTitleStrong.innerHTML = LONG_BREAK_TITLE.strong;
      break;
    default:
  }
}

function removeActiveMarks() {
  buttons.forEach(function (context) {
    context.classList.remove("active");
  });
}

function changeContext(context) {
  pauseCountdown();
  showTimer();
  html.setAttribute("data-contexto", context);
  headerImage.setAttribute("src", `/imagens/${context}.png`);
  changeHeaderTitle(context);
  removeActiveMarks(context);
}

function pauseCountdown() {
  labelStartStopTimer.textContent = "Começar";
  labelStartStopImage.setAttribute("src", "./imagens/play_arrow.png");
  clearInterval(interval);
  interval = null;
}

function countdown() {
  if (timeInMiliseconds <= 0) {
    beep.play();
    pauseCountdown();
    return;
  }
  timeInMiliseconds -= 1;
  showTimer();
}

function startTimer() {
  if (interval) {
    pause.play();
    labelStartStopTimer.textContent = "Começar";
    labelStartStopImage.setAttribute("src", "./imagens/play_arrow.png");
    pauseCountdown();
    return;
  }

  labelStartStopTimer.textContent = "Pausar";
  labelStartStopImage.setAttribute("src", "./imagens/pause.png");
  play.play();
  interval = setInterval(countdown, 1000);
}

buttonFocus.addEventListener("click", () => {
  timeInMiliseconds = focusTime;
  changeContext("foco");
  buttonFocus.classList.add("active");
});

buttonShortBreak.addEventListener("click", () => {
  timeInMiliseconds = shortBreakTime;
  changeContext("descanso-curto");
  buttonShortBreak.classList.add("active");
});

buttonLongBreak.addEventListener("click", () => {
  timeInMiliseconds = longBreakTime;
  changeContext("descanso-longo");
  buttonLongBreak.classList.add("active");
});

buttonMusic.addEventListener("change", () => {
  if (backtrack.paused) {
    backtrack.play();
  } else {
    backtrack.pause();
  }
});

buttonStartStopTimer.addEventListener("click", () => startTimer());

function showTimer() {
  const time = new Date(timeInMiliseconds * 1000);
  const timeFormatted = time.toLocaleTimeString("pt-Br", {
    minute: "2-digit",
    second: "2-digit",
  });
  timer.innerHTML = `${timeFormatted}`;
}

showTimer();
