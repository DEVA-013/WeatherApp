// script.js
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  fetchWeather(city);
});

function fetchWeather(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(apiURL)
    .then(response => response.json())
    .then(data => displayWeather(data))
    .catch(err => alert("City not found"));
}

function displayWeather(data) {
  document.getElementById("cityName").innerText = data.name;
  document.getElementById("temperature").innerText = `${data.main.temp}°C`;
  document.getElementById("description").innerText = data.weather[0].description;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}
