  function getWeather() {
      const location = document.getElementById('location').value;
      const apiKey = '80674d584e3f174c84f366b124337ae1'; // Get your API key from OpenWeatherMap
  
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              const weatherInfo = document.getElementById('weather-info');
              if (data.cod === '404') {
                  weatherInfo.innerHTML = "City not found";
              } else {
                  const description = data.weather[0].description;
                  const temperature = (data.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
                  const cityName = data.name;
                  weatherInfo.innerHTML = `Weather in ${cityName}: ${description}, ${temperature}°C`;
              }
          })
          .catch(error => console.error('Error:', error));
  }
  