const city = document.querySelector('.city');
const weather = document.querySelector('.weather');


city.addEventListener("keydown", cityHandler)

function cityHandler(e) {
    if (e.keyCode === 13) {

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=70e1ed322b02acbc57d443dd91065f3e`;
        fetch(url)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    console.log("This is error ", res.status);
                }
            }).then(data => {
                const weatherTemp = Math.floor(data.main.temp - 273)
                console.log(data);
                // console.log(localStorage.getItem("weather"));
                weather.innerHTML = `
                <i class="weather-icon owf"></i>
                    <div class="weather-error"></div>
                    <div class="description-container">
                    <span class="temperature">${weatherTemp}&deg</span>
                    <span class="weather-description">${data.weather[0].description}</span>
                    </div>
                    <div class="wind"></div>
                    <div class="humidity"></div>
                    `


                // let val = {
                //     temp: weatherTemp,
                //     describ: data.weather[0].description
                // }
                // localStorage.setItem("weather", val)
                weather.insertAdjacentElement("afterbegin", city)
            })
            .catch(error => {
                console.log(error);
            })
        localStorage.setItem("city", e.target.value)

    }
}
if (localStorage.getItem('name')) {
    city.value = localStorage.getItem('city');
}