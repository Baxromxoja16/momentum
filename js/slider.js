const body = document.querySelector("body");
const slideNext = document.querySelector(".slide-next");
const slidePrev = document.querySelector(".slide-prev");
const greeting = document.querySelector(".greeting");

const dayPart = greeting.innerText.replace("Good ", "");

let i = 18;

const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayPart}/${i}.jpg`;
body.style.background = `url(${url})  rgba(0, 0, 0, 0.5`;

slideNext.addEventListener("click", slideNextHandler);
slidePrev.addEventListener("click", slidePrevHandler);

function slideNextHandler() {
  i++;
  i > 20 ? (i = 10) : "";
  const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayPart}/${i}.jpg`;
  body.style.background = `url(${url})  rgba(0, 0, 0, 0.5`;
}

function slidePrevHandler() {
  i--;
  i < 10 ? (i = 20) : "";
  const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${dayPart}/${i}.jpg`;
  body.style.background = `url(${url})  rgba(0, 0, 0, 0.5`;
}
