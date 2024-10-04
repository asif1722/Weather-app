const apiKey = "665d758556dbc5ceebe90b1f214689bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchBtn = document.getElementById("search-btn");

async function checkWeather() {
    let city = document.getElementById("searchbox").value;
    const response = await fetch(`${apiUrl}&appid=${apiKey}&q=${city}`);
    let data = await response.json();
    console.log(data);

    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind speed: ${data.wind.speed} km/h`;
}

searchBtn.onclick = checkWeather;