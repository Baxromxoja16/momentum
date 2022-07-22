const time = document.querySelector('time');

// show time 
function showTime() {
    const date = new Date();

    const currentTime = date.toLocaleTimeString();

    time.innerHTML = `${currentTime}`

}
setInterval(showTime, 1000);


// show month day 
function showMonth() {
    const dateHtml = document.querySelector('.date');
    const date = new Date();

    const options = { weekday: 'long', day: 'numeric', month: 'long' };

    const currentDate = date.toLocaleDateString('en-En', options);

    dateHtml.innerHTML = currentDate
} showMonth()


// helloing
function helloing() {
    const date = new Date();
    const greetingText = document.querySelector('.greeting');

    const hours = date.getHours();

    if (hours >= 5 && hours < 21) {
        greetingText.innerHTML = `Good morning`
    } if (hours >= 12 && hours < 17) {
        greetingText.innerHTML = `Good afternoon `
    } if (hours >= 17 && hours < 21) {
        greetingText.innerHTML = `Good evening`
    } if (hours >= 21 && hours < 5) {
        greetingText.innerHTML = `Good night`
    }
}
helloing()


// adding localStorage
const name = document.querySelector('.name');
name.addEventListener("input", (e) => {
    localStorage.setItem('name', name.value);
})
if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
};
