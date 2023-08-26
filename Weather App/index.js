const apiKey = "543b5648bc699b99edc78d2cf55c436f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"

    } else {
        var data = await response.json();

    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =   Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed  +  " " + "km/hr";

    if(data.weather[0].main=="Clouds") {

        weatherIcon.src = "7084486.png"

    } else if(data.weather[0].main=="Clear") {

        weatherIcon.src = "weather-clear-symbolic-icon-511x512-zfj6vb21.png"

    } else if(data.weather[0].main=="Rain") {

        weatherIcon.src = "rain.png"

    } else if(data.weather[0].main=="Drizzle") {

        weatherIcon.src= "2675897.png"

    }else if(data.weather[0].main=="Mist") {

        weatherIcon.src= "1197102.png"

    } else if(data.weather[0].main=="Snow") {

        weatherIcon.src= "6221304.png"
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }

}


searchBtn.addEventListener("click" , ()=> {
    checkWeather(searchInput.value);
} )


