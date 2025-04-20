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

      const condition = weatherData.main.toLowerCase();
console.log("Weather condition:", condition); // Debug

if (condition.includes("clear")) {
  document.body.style.backgroundImage = "url('https://preview.redd.it/bnef3fhuqm261.png?width=1080&crop=smart&auto=webp&s=c99ad19012ed7569db81a9b40732bea7828f0aae')";
} else if (condition.includes("cloud")) {
  document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqxThTVlL07z8HD5uT9cMvW1LBRMuwTvEqA&s')";
} else if (condition.includes("rain")) {
  document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRms8U8o6REScI-G7ceAP2FwhuentfD7v2lWw&s')";
} else if (condition.includes("smoke") || condition.includes("mist") || condition.includes("haze")) {
  document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXX4ofw7-P6GwXOUKu1fpslArFal9z6ig1Q&s')";
} else {
  document.body.style.backgroundImage = "url('https://wallpapers.com/images/hd/aesthetic-anime-city-1920-x-1080-background-q2qcrht1fahwg0pu.jpg')";
}

// Ensuring the background image fits properly
document.body.style.backgroundSize = "cover"; // Makes the image fill the screen
document.body.style.backgroundRepeat = "no-repeat"; // Stops repeating
document.body.style.backgroundPosition = "center"; // Centers the image
document.body.style.height = "100vh"; // Ensures the body takes full screen height

    })
    .catch(error => {
      alert("City not found or there was an error fetching the data.");
      console.error(error);
    });
}
