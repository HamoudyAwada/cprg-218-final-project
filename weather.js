fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=7519ed877517d68c392bcb5bb6b85f94&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.main.temp)

    temperature.textContent = "Temperature: " + data.main.temp + "\u00B0C";
    description.textContent = "Description: " + data.weather[0].description;
    humidity.textContent = "Humidity: " + data.main.humidity;
    high.textContent = "High: " + data.main.temp_max;
    low.textContent = "Low: " + data.main.temp_min;
    realfeel.textContent = "Real Feel: " + data.main.feels_like + "\u00B0C";

    const weathericon = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + "@2x.png";
    console.log(weathericon);
    document.getElementById("icon").alt = data.weather[0].description
    
    icon.src = weathericon
});