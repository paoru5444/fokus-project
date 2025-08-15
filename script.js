const html = document.querySelector("html");
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
