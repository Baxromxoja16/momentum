const weatherError = document.querySelector('.weather-error');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather');

if (localStorage.getItem("city") === null || localStorage.getItem("city")) {
    city.value = localStorage.getItem("city") ? localStorage.getItem("city") : "Minsk"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=70e1ed322b02acbc57d443dd91065f3e`;
    fetch(url)
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                console.log("This is error ", res.status);

                const errorText = {
                    error: `Error! city not found for '${city.value}'!`
                }

                localStorage.setItem("weather", JSON.stringify(errorText))

                const errorWeather = JSON.parse(localStorage.getItem("weather"))

                console.log("data", errorWeather.error);

                weatherError.innerHTML = `${errorWeather.error}`

                weather.insertAdjacentElement(weatherError)
            }
        }).then(data => {
            const weatherTemp = Math.floor(data.main.temp - 273)

            let val = {
                temp: weatherTemp,
                describ: data.weather[0].description,
                wind: data.wind.speed,
                humidity: data.main.humidity,
                id: data.weather[0].id,
            }

            localStorage.setItem("weather", JSON.stringify(val))

            const dataWeather = JSON.parse(localStorage.getItem("weather"))
            
            dataWeather.error ? dataWeather.error : dataWeather.error = ""

            weather.innerHTML = `
                <i class="weather-icon owf owf-${dataWeather.id}"></i>
                <div class="weather-error">${dataWeather.error}</div>
                <div class="description-container">
                    <span class="temperature">${dataWeather.temp}&degC</span>
                    <span class="weather-description">${dataWeather.describ}</span>
                </div>
                <div class="wind">Wind speed: ${dataWeather.wind} m/s</div>
                <div class="humidity">Humidity: ${dataWeather.humidity}%</div>
                `

            weather.insertAdjacentElement("afterbegin", city)
        })
        .catch(error => {
            console.log(error);
        })
}

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

                    const errorText = {
                        error: `Error! city not found for '${city.value}'!`
                    }

                    localStorage.setItem("weather", JSON.stringify(errorText))

                    const errorWeather = JSON.parse(localStorage.getItem("weather"))

                    console.log(weatherError);

                    weatherError.innerHTML = `${errorWeather.error}`

                    weather.insertAdjacentElement(weatherError)
                }
            }).then(data => {
                const weatherTemp = Math.floor(data.main.temp - 273)

                let val = {
                    temp: weatherTemp,
                    describ: data.weather[0].description,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    id: data.weather[0].id,
                }

                localStorage.setItem("weather", JSON.stringify(val))

                const dataWeather = JSON.parse(localStorage.getItem("weather"))

                dataWeather.error ? dataWeather.error : dataWeather.error = ""

                weather.innerHTML = `
                    <i class="weather-icon owf owf-${dataWeather.id}"></i>
                    <div class="weather-error">${dataWeather.error}</div>
                    <div class="description-container">
                        <span class="temperature">${dataWeather.temp}&degC</span>
                        <span class="weather-description">${dataWeather.describ}</span>
                    </div>
                    <div class="wind">Wind speed: ${dataWeather.wind} m/s</div>
                    <div class="humidity">Humidity: ${dataWeather.humidity}%</div>
                    `

                weather.insertAdjacentElement("afterbegin", city)
            })
            .catch(error => {
                console.log(error);
            })
        localStorage.setItem("city", e.target.value)
    }
}
if (localStorage.getItem('city')) {
    localStorage.getItem('city');
}
if (localStorage.getItem('weather')) {
    localStorage.getItem('weather');
}