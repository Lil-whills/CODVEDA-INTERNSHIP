import clear_icon  from './assets/clear.png';
import cloud_icon from './assets/cloud.png';
import snow_icon from './assets/snow.png';
import drizzle_icon from './assets/drizzle.png';
import rain_icon from './assets/rain.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const API_KEY = "35acbdd3cc26886daba8f09c654511b3";
  const [weatherData, setWeatherData] = useState({});
  const [input, setInput] = useState("");

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon
  };

  // ✅ function to fetch weather
  const fetchWeather = (cityName) => {
    if (!cityName) return; // prevent empty input

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    axios.get(url)
      .then((response) => {
        const icon = allIcons[response.data.weather[0].icon] || clear_icon;

        setWeatherData({
          humidity: response.data.main.humidity,
          windSpeed: response.data.wind.speed,
          temperature: Math.floor(response.data.main.temp),
          location: response.data.name,
          icon: icon,
          description: response.data.weather[0].description,
        });
      })
      .catch((err) => {
        console.error(err);
        alert("City not found ❌");
      });
  };

  // ✅ load default city once
  useEffect(() => {
    fetchWeather("New York");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Weather App
        </h1>

        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}   // ✅ input handler
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => fetchWeather(input)}   // ✅ fetch weather on click
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* Weather Card */}
        {weatherData.location && (
          <div className="text-center">
            <img className="w-24 h-24 mx-auto" src={weatherData.icon} alt="weather-icon" />
            <h2 className="text-xl font-semibold text-gray-700">{weatherData.location}</h2>
            <p className="text-5xl font-bold text-blue-600">{weatherData.temperature}°C</p>
            <p className="text-gray-600 capitalize">{weatherData.description}</p>

            <div className="flex justify-between mt-4 text-gray-600">
              <p>💧 Humidity: {weatherData.humidity}%</p>
              <p>💨 Wind: {weatherData.windSpeed} km/h</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
