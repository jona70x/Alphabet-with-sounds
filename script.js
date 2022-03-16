"use strict";
const playSound = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //Guard clause

  audio.currentTime = 0; //Rewinda the start
  audio.play();

  key.classList.add("playing");
};

window.addEventListener("keydown", playSound);

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return; // skip it if it's not a transform
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//Photo by Rich Tervet on Unsplash
