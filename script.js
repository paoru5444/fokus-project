const html = document.querySelector("html");
const timer = document.querySelector(".app__card-timer");

// header
const headerImage = document.querySelector(".app__image");
const headerTitleRegular = document.querySelector(".app__title");
const headerTitleStrong = document.querySelector(".app__title-strong");

// buttons
const buttonFocus = document.querySelector(".app__card-button--foco");
const buttonShortBreak = document.querySelector(".app__card-button--curto");
const buttonLongBreak = document.querySelector(".app__card-button--longo");

buttonFocus.addEventListener("click", () => {
  html.setAttribute("data-contexto", "foco");
});

buttonShortBreak.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-curto");
});

buttonLongBreak.addEventListener("click", () => {
  html.setAttribute("data-contexto", "descanso-longo");
});
