document.addEventListener('DOMContentLoaded', function () {
   const cityInput = document.getElementById('cityInput');
   const getWeatherBtn = document.getElementById('getWeatherBtn');
   const weatherInfo = document.getElementById('weatherInfo');
   getWeatherBtn.addEventListener('click', function () {
     const city = cityInput.value.trim();
     if (city !== '') {
       fetchWeather(city);
     } else {
       weatherInfo.innerHTML = '<p>Please enter a city name.</p>';
     }
 });
 async function fetchWeather(city) {
     try {
       const apiKey = " -- API KEY --";
       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&app id=${apiKey}`);
       const data = await response.json();
       const temperature = data.main.temp;
       const description = data.weather[0].description;
       const humidity = data.main.humidity;
       const windSpeed = data.wind.speed;
       const weatherHtml = `
         <h2>${city} Weather</h2>
         <p>Temperature: ${temperature}°C</p>
         <p>Conditions: ${description}</p>
         <p>Humidity: ${humidity}%</p>
         <p>Wind Speed: ${windSpeed} m/s</p>  `;
       weatherInfo.innerHTML = weatherHtml;
     } catch (error) {
       console.error('Error fetching weather data:', error);
       weatherInfo.innerHTML = '<p>Something went wrong. Please try again later.</p>';
     }
   }
 });
