// src/components/Page2.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Page2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const queryLocation = params.get('location') || '';

  const [inputLocation, setInputLocation] = useState(queryLocation);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (location) => {
    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=2a5876822e0b41328f5181007241806&q=${location}`);
      setWeather(response.data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error fetching weather data");
      setWeather(null); // Clear any previous weather data
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/page2?location=${inputLocation}`);
    fetchWeather(inputLocation);
  };

  useEffect(() => {
    if (queryLocation) {
      fetchWeather(queryLocation);
    }
  }, [queryLocation]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputLocation}
          onChange={(e) => setInputLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p>{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.location.name}</h2>
          <p>{weather.current.condition.text}</p>
          <p>Temperature: {weather.current.temp_c} °C</p>
          <p>Humidity: {weather.current.humidity}%</p>
        </div>
      )}
    </div>
  );
};

export default Page2;
