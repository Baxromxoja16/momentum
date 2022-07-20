import allMusic from "./playList.js"

const playList = document.querySelector('.play-list');
const playPrev = document.querySelector('.play-prev');
const playNext = document.querySelector('.play-next');

// Music names
allMusic().forEach(val => {
    const play_item = document.createElement('li');

    play_item.classList.add("play_item")

    const nameText = document.createTextNode(`${val.title}`)

    play_item.appendChild(nameText)

    playList.appendChild(play_item)
})

//  paused
let i = 0

let audio = new Audio();

audio.src = allMusic()[i].src

const play = document.querySelector('.play');

play.addEventListener("click", playPauseHandler)

function playPauseHandler() {
    play.classList.toggle("pause")

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

// next prev buttons
const play_item = document.querySelectorAll('.play_item');

playNext.addEventListener("click", nextHandler)
playPrev.addEventListener("click", prevHandler)

function nextHandler() {
    play.classList.add("pause")

    audio.src = allMusic()[i].src

    audio.play()

    play_item.forEach((val) => val.classList.remove("item_active"))

    play_item[i].classList.add("item_active")

    i++

    if (i >= play_item.length) {
        i = 0
    }
}

function prevHandler() {
    play.classList.add("pause")

    play_item.forEach((val) => val.classList.remove("item_active"))

    i--
    if (i < 0) {
        i = play_item.length - 1
    }
    play_item[i].classList.add("item_active")
    audio.src = allMusic()[i].src

    audio.play()
}



