// digital clock
let startTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clockTxt').innerHTML = h + ":" + m + ":" + s;
    let t = setTimeout(startTime, 500);
}

// update clock
let checkTime = (i) => {
    if (i < 10) { i = "0" + i };
    return i;
}


// Fetch weather data from OpenWeather API
function fetchWeatherData() {
    const apiKey = '2479ad258203fcd69ccfe61e4c0851c1';
    const longitude = 114.15;
    const latitude = 22.3;
    const numDays = 3;
    const cnt = (numDays*24)/3; // 3-hourly forecast for 3 days
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=${cnt}&appid=${apiKey}`;

    console.log(apiUrl);
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => processWeatherData(data))
      .catch(error => console.log('Error:', error));
  }
  
  // Process weather data and create weather cards
  function processWeatherData(data) {
    const weatherCardsContainer = document.querySelector('.weatherCardsContainer');
  
    for (let i = 0; i < 24; i+=8) {
      const weatherData = data.list[i];
      const dateTime = new Date(weatherData.dt * 1000);
      const date = dateTime.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
      const temperature = Math.round(weatherData.main.temp - 273.15);
      const description = weatherData.weather[0].description;
      const iconCode = weatherData.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  
      const weatherCard = document.createElement('div');
      weatherCard.classList.add('weather-card');
      weatherCard.innerHTML = `
        <div class="date">${date}</div>
        <img src="${iconUrl}" alt="Weather Icon">
        <div class="temperature">${temperature}°C</div>
        <div class="description">${description}</div>
      `;
  
      weatherCardsContainer.appendChild(weatherCard);
    }
  }
  
// Fetch weather data when the page loads
window.addEventListener('load', fetchWeatherData);

window.addEventListener('load', startTime);
