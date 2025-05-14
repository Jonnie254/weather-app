'use client';
import React from "react";

interface ForecastCardProps {
  day: string;
  temperature: string;
  description: string;
  iconCode: string;
  iconUrl: string;  
}

const ForecastCard: React.FC<ForecastCardProps> = ({
  day,
  temperature,
  description,
  iconCode,
  iconUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-between min-h-[240px]">

      <h3 className="text-xl font-bold mb-2">{day}</h3>

      <img src={iconUrl} alt={description} className="w-20 h-20 my-4" />

      <div className="text-center mt-2">
        <p className="text-lg font-semibold">{temperature}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ForecastCard;
