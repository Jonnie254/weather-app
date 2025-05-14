"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CurrentWeather from "../components/CurrentWeather";
import ForecastCard from "../components/ForecastCard";
import AdditionalInfo from "../components/AdditionalInfo";
import { getWeather } from "../lib/getWeather"; 
import type { WeatherData } from "../interface/WeatherData"; 

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("Nairobi");
      console.log(data); 
      setWeatherData(data); 
    };

    fetchWeather(); 
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const iconUrl = (iconCode: string) => `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row max-w-7xl mx-auto px-4 py-6 gap-4 w-full">
        <CurrentWeather
          city={weatherData.city}
          day={weatherData.date}
          temperature={`${weatherData.weather.temperature}°C`}
          description={weatherData.weather.description}
          iconCode={weatherData.weather.icon}
          iconUrl={iconUrl(weatherData.weather.icon)} 
        />
      

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          {/* Forecast Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.keys(weatherData.forecast).map((day, index) => (
              <ForecastCard
                key={index}
                day={day}
                temperature={`${weatherData.forecast[day].temperature}°C`}
                description={weatherData.forecast[day].description}
                iconCode={weatherData.forecast[day].icon}
                iconUrl={iconUrl(weatherData.forecast[day].icon)}  
              />
            ))}
          </div>

          {/* Additional Information - Wind, Humidity */}
          <AdditionalInfo
            windSpeed={`${weatherData.weather.wind_speed} km/h`}
            humidity={`${weatherData.weather.humidity}%`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
