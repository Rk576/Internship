    const iconMappings = {
        1000: "https://openweathermap.org/img/wn/01d@2x.png", // Sunny / Clear
        1003: "https://openweathermap.org/img/wn/03d@2x.png", // Partly cloudy
        1006: "https://openweathermap.org/img/wn/04d@2x.png", // Cloudy
        1009: "https://openweathermap.org/img/wn/04d@2x.png", // Overcast
        1030: "https://openweathermap.org/img/wn/50d@2x.png", // Mist
        1063: "https://openweathermap.org/img/wn/10d@2x.png", // Patchy rain possible
        1066: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy snow possible
        1069: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy sleet possible
        1072: "https://openweathermap.org/img/wn/09d@2x.png", // Patchy freezing drizzle possible
        1087: "https://openweathermap.org/img/wn/11d@2x.png", // Thundery outbreaks possible
        1114: "https://openweathermap.org/img/wn/13d@2x.png", // Blowing snow
        1117: "https://openweathermap.org/img/wn/13d@2x.png", // Blizzard
        1135: "https://openweathermap.org/img/wn/50d@2x.png", // Fog
        1147: "https://openweathermap.org/img/wn/50d@2x.png", // Freezing fog
        1150: "https://openweathermap.org/img/wn/09d@2x.png", // Patchy light drizzle
        1153: "https://openweathermap.org/img/wn/09d@2x.png", // Light drizzle
        1168: "https://openweathermap.org/img/wn/13d@2x.png", // Freezing drizzle
        1171: "https://openweathermap.org/img/wn/13d@2x.png", // Heavy freezing drizzle
        1180: "https://openweathermap.org/img/wn/10d@2x.png", // Patchy light rain
        1183: "https://openweathermap.org/img/wn/10d@2x.png", // Light rain
        1186: "https://openweathermap.org/img/wn/10d@2x.png", // Moderate rain at times
        1189: "https://openweathermap.org/img/wn/10d@2x.png", // Moderate rain
        1192: "https://openweathermap.org/img/wn/10d@2x.png", // Heavy rain at times
        1195: "https://openweathermap.org/img/wn/10d@2x.png", // Heavy rain
        1198: "https://openweathermap.org/img/wn/13d@2x.png", // Light freezing rain
        1201: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate or heavy freezing rain
        1204: "https://openweathermap.org/img/wn/13d@2x.png", // Light sleet
        1207: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate or heavy sleet
        1210: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy light snow
        1213: "https://openweathermap.org/img/wn/13d@2x.png", // Light snow
        1216: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy moderate snow
        1219: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate snow
        1222: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy heavy snow
        1225: "https://openweathermap.org/img/wn/13d@2x.png", // Heavy snow
        1237: "https://openweathermap.org/img/wn/13d@2x.png", // Ice pellets
        1240: "https://openweathermap.org/img/wn/10d@2x.png", // Light rain shower
        1243: "https://openweathermap.org/img/wn/10d@2x.png", // Moderate or heavy rain shower
        1246: "https://openweathermap.org/img/wn/10d@2x.png", // Torrential rain shower
        1249: "https://openweathermap.org/img/wn/13d@2x.png", // Light sleet showers
        1252: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate or heavy sleet showers
        1255: "https://openweathermap.org/img/wn/13d@2x.png", // Light snow showers
        1258: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate or heavy snow showers
        1261: "https://openweathermap.org/img/wn/13d@2x.png", // Light showers of ice pellets
        1264: "https://openweathermap.org/img/wn/13d@2x.png", // Moderate or heavy showers of ice pellets
        1273: "https://openweathermap.org/img/wn/11d@2x.png", // Patchy light rain with thunder
        1276: "https://openweathermap.org/img/wn/11d@2x.png", // Moderate or heavy rain with thunder
        1279: "https://openweathermap.org/img/wn/13d@2x.png", // Patchy light snow with thunder
        1282: "https://openweathermap.org/img/wn/13d@2x.png"  // Moderate or heavy snow with thunder
    };


    const app = document.querySelector('.weather-app');
    const temp = document.querySelector('.temp');
    const dateOutput = document.querySelector('.date');
    const timeOutput = document.querySelector('.time');
    const conditionOutput = document.querySelector('.condition');
    const nameOutput = document.querySelector('.name');
    const icon = document.querySelector('.icon');
    const cloudOutput = document.querySelector('.cloud');
    const humidityOutput = document.querySelector('.humidity');
    const windOutput = document.querySelector('.wind');
    const form = document.querySelector('#locationInput');
    const search = document.querySelector('.search');
    const btn = document.querySelector('.submit');
    const cities = document.querySelectorAll('.city');

    let cityInput="Vadodara";

    cities.forEach((city) => {
        city.addEventListener('click', (e) => {
            cityInput = e.target.innerHTML.trim();
            nameOutput.innerHTML = cityInput; 
            fetchWeatherData();
            app.style.opacity = "0";
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (search.value.trim().length === 0) { 
            alert('Please type the name of the city!');
        } else {
            cityInput = search.value.trim(); 
            nameOutput.innerHTML = cityInput;
            fetchWeatherData();
            search.value = "";
            app.style.opacity = "0";
        }
    });

    function dayOfTheWeek(day, month, year) {
        const weekday = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];
        return weekday[new Date(`${year}-${month}-${day}`).getDay()];
    }

    function fetchWeatherData() {
        fetch(`http://api.weatherapi.com/v1/current.json?key=0d7fdc5af6a441adb00101834242806&q=${cityInput}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                temp.innerHTML = data.current.temp_c + "&#176;";
                conditionOutput.innerHTML = data.current.condition.text;

                const date = data.location.localtime;
                const y = parseInt(date.substr(0, 4));
                const m = parseInt(date.substr(5, 2));
                const d = parseInt(date.substr(8, 2));
                const time = date.substr(11);

                dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m} ${y}`;
                timeOutput.innerHTML = time;

                const iconId = data.current.condition.code;
                const iconUrl = iconMappings[iconId];

                if (iconUrl) {
                    icon.src = iconUrl;
                } else {
                    // Default icon URL or handle missing icon URL case
                    icon.src = "default-icon-url.png";
                }
                cloudOutput.innerHTML = data.current.cloud + "%";
                humidityOutput.innerHTML = data.current.humidity + "%";
                windOutput.innerHTML = data.current.wind_kph + " km/h";

                let timeOfDay = "day";
                if (!data.current.is_day) {
                    timeOfDay = "night";
                }

                const code = data.current.condition.code;

                if (code === 1000) {
                    app.style.backgroundImage = `url(./images/${timeOfDay}/clear.jpg)`;
                    btn.style.background = "#e5ba92";
                    if (timeOfDay === 'night') {
                        btn.style.background = "#181e27";
                    }
                } else if ([1003, 1006, 1009, 1030, 1069, 1087, 1135, 1273, 1276, 1279, 1282].includes(code)) {
                    app.style.backgroundImage = `url(./images/${timeOfDay}/cloudy.jpg)`;
                    btn.style.background = "#fa6d1b";
                    if (timeOfDay === 'night') {
                        btn.style.background = "#181e27";
                    }
                } else if ([1063, 1069, 1072, 1150, 1153, 1180, 1183, 1186, 1189, 1192, 1195, 1204, 1207, 1240, 1243, 1246, 1252].includes(code)) {
                    app.style.backgroundImage = `url(./images/${timeOfDay}/rainy.jpg)`;
                    btn.style.background = "#647d75";
                    if (timeOfDay === 'night') {
                        btn.style.background = "#325c80";
                    }
                } else {
                    app.style.backgroundImage = `url(./images/${timeOfDay}/snowy.jpg)`;
                    btn.style.background = "#4d72aa";
                    if (timeOfDay === 'night') {
                        btn.style.background = "#1b1b1b";
                    }
                }
                app.style.opacity = "1";
            })
            .catch(() => {
                alert('City not found! Please try again');
                app.style.opacity = "1";
            });
    }
    fetchWeatherData();
    app.style.opacity = "1";
