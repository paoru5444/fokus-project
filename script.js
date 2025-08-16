import {
  FOCUS_TITLE,
  SHORT_BREAK_TITLE,
  LONG_BREAK_TITLE,
} from "./constants.js";

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

// timer
const timer = document.querySelector(".app__card-timer");
const timerTrigger = document.querySelector(".app__card-primary-button");

const focusTime = 1500;
const shortBreakTime = 300;
const shortLongTime = 900;

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
  html.setAttribute("data-contexto", context);
  headerImage.setAttribute("src", `/imagens/${context}.png`);
  changeHeaderTitle(context);
  removeActiveMarks(context);
}

buttonFocus.addEventListener("click", () => {
  changeContext("foco");
  buttonFocus.classList.add("active");
});

buttonShortBreak.addEventListener("click", () => {
  changeContext("descanso-curto");
  buttonShortBreak.classList.add("active");
});

buttonLongBreak.addEventListener("click", () => {
  changeContext("descanso-longo");
  buttonLongBreak.classList.add("active");
});
