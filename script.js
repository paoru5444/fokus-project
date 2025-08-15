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
  }
}

function changeContext(context) {
  html.setAttribute("data-contexto", context);
  headerImage.setAttribute("src", `/imagens/${context}.png`);
  changeHeaderTitle(context);
}

buttonFocus.addEventListener("click", () => changeContext("foco"));

buttonShortBreak.addEventListener("click", () =>
  changeContext("descanso-curto")
);

buttonLongBreak.addEventListener("click", () =>
  changeContext("descanso-longo")
);
