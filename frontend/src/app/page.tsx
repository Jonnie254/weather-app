"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CurrentWeather from "../components/CurrentWeather";
import ForecastCard from "../components/ForecastCard";
import AdditionalInfo from "../components/AdditionalInfo";
import { getWeather } from "../lib/getWeather"; 
import type { WeatherData } from "../interface/WeatherData"; 
import Loader from "@/components/Loader";

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [city, setCity] = useState<string>('Nairobi'); 

  const fetchWeather = async (city: string, selectedUnit = unit) => {
    console.log(`Fetching weather for city: ${city} with unit: ${selectedUnit}`); // Log fetch request
    try {
      setLoading(true);
      const data = await getWeather(city, selectedUnit);
      console.log('Weather data fetched:', data); // Log fetched data
      setWeatherData(data);
    } catch (error) {
      console.error('Failed to fetch weather', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city, unit); 
  }, [unit, city]);
  const handleUnitChange = (newUnit: 'metric' | 'imperial') => {
    setUnit(newUnit);
  };
  

  const handleCityChange = (newCity: string) => {
    setCity(newCity);
    fetchWeather(newCity, unit);
  };

  const iconUrl = (iconCode: string) =>
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar 
        onCityChange={handleCityChange}
        onUnitChange={handleUnitChange}
        currentUnit={unit}
      />

      {loading || !weatherData ? (
        <Loader />
      ) : (
        <div className="flex flex-1 flex-col md:flex-row max-w-7xl mx-auto px-4 py-6 gap-4 w-full">
          <CurrentWeather
            city={weatherData.city}
            day={weatherData.date}
            temperature={`${weatherData.weather.temperature}°${unit === 'metric' ? 'C' : 'F'}`}
            description={weatherData.weather.description}
            iconCode={weatherData.weather.icon}
            iconUrl={iconUrl(weatherData.weather.icon)}
          />

          <div className="w-full md:w-2/3 flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {Object.keys(weatherData.forecast).map((day, index) => (
                <ForecastCard
                  key={index}
                  day={day}
                  temperature={`${weatherData.forecast[day].temperature}°${unit === 'metric' ? 'C' : 'F'}`}
                  description={weatherData.forecast[day].description}
                  iconCode={weatherData.forecast[day].icon}
                  iconUrl={iconUrl(weatherData.forecast[day].icon)}
                />
              ))}
            </div>

            <AdditionalInfo
              windSpeed={`${weatherData.weather.wind_speed}`}
              humidity={`${weatherData.weather.humidity}%`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
