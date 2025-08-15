const html = document.querySelector("html");

// header
const headerImage = document.querySelector(".app__image");
const headerTitleRegular = document.querySelector(".app__title");
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

buttonFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
});

buttonShortBreak.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
});

buttonLongBreak.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
});
