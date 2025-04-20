const cityInput = document.getElementById("city");
const weatherBtn = document.getElementById("getWeatherBtn");

const cityName = document.getElementById("cityname");
const cityTemp = document.getElementById("temperature");
const cityWeatherDescription = document.getElementById("weatherDescription");
const cityHumidity = document.getElementById("humidity");
const cityWindspeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");

const API_KEY = "7f95e547b31f00fce49809a7ffbd2589"; // ✅ Just the key

weatherBtn.addEventListener("click", function () {
  const city = cityInput.value;

  if (city) {
    fetchWeatherData(city);
  } else {
    alert("Please enter the city name!");
  }
});

function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherData = data.weather[0];
      const mainData = data.main;
      const windData = data.wind;

      cityName.innerText = `${data.name}, ${data.sys.country}`;
      cityTemp.innerText = `${mainData.temp}°C`;
      cityWeatherDescription.innerText = weatherData.description;
      cityHumidity.innerText = `Humidity: ${mainData.humidity}%`;
      cityWindspeed.innerText = `Wind Speed: ${windData.speed} m/s`;

      const iconCode = weatherData.icon;
      weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    })
    .catch(error => {
      alert("City not found or there was an error fetching the data.");
      console.error(error);
    });
}
