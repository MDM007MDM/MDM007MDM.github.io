const apiKey = 'bc688bd91bb04f4dc27d3b5e9222bc60'; 

function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>Weather in ${city}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Humidity: ${humidity} %</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
            alert('Error fetching the weather data');
        });
}
