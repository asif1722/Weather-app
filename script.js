const apiKey = "665d758556dbc5ceebe90b1f214689bf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=nairobi&units=metric";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.getElementById("city").innerText = data.name;
    document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}`;
    document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById("wind-speed").innerText = `Wind speed: ${data.wind.speed} km/h`;
}

checkWeather();