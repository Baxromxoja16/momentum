const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

let i = 10


slideNext.addEventListener("click", slideNextHandler)
slidePrev.addEventListener("click", slidePrevHandler)

async function slideNextHandler() {
    i++
    console.log("nexy");
    i > 20 ? i = 10 : ""
    const url = await `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${i}.jpg`
    body.style.background = `url(${url})`
}

async function slidePrevHandler() {
    i--
    i < 10 ? i = 20 : ""
    const url = await `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${i}.jpg`
    body.style.background = `url(${url})`
}



