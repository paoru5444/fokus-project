const buttons = document.querySelectorAll(".action-button");
const buttonAction01 = document.querySelector(".action-button-01");
const buttonAction02 = document.querySelector(".action-button-02");
const buttonAction03 = document.querySelector(".action-button-03");
const buttonMusic = document.querySelector(".music-button");

const audio = new Audio("../sons/sonhos-e-planos.mp3");
audio.loop = true;

const buttonActions = {
  setButtonsInactive: function () {
    buttons.forEach((button) => {
      button.classList.remove("action-button-selected");
    });
  },
  select: function (button) {
    this.setButtonsInactive();
    button.classList.add("action-button-selected");
  },
};

buttonAction01.addEventListener("click", () =>
  buttonActions.select(buttonAction01)
);

buttonAction02.addEventListener("click", () =>
  buttonActions.select(buttonAction02)
);

buttonAction03.addEventListener("click", () =>
  buttonActions.select(buttonAction03)
);

buttonMusic.addEventListener("click", () => {
  console.log("music-button");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
