import { handleCountdown } from "./intervalHandler.js";

const buttonCountdown = document.querySelector(".button_countdown");

buttonCountdown.addEventListener("click", () => handleCountdown());
