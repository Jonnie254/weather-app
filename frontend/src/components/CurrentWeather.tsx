'use client'
import React from "react";

interface CurrentWeatherProps {
  city: string;
  day: string;
  temperature: string;
  description: string;
  iconCode: string;
  iconUrl: string; 
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ city, temperature, day, description, iconCode, iconUrl }) => {
  return (
    <div className="w-full md:w-1/3 bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-between h-96">
      
      <div className="mb-4">
        <img src={iconUrl} alt={description} className="w-32 h-32" />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">{temperature}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{day}</h2>
        <h2 className="text-lg font-medium text-gray-700">{city}</h2>
      </div>
    </div>
  );
};

export default CurrentWeather;
