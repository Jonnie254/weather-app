'use client';
import React from "react";

type AdditionalInfoProps = {
  windSpeed: string;
  humidity: string;
};

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({
  windSpeed,
  humidity,
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
      <div className="flex gap-4">
        {/* Wind Speed Card */}
        <div className="flex-1 bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Wind Speed</p>
          <div className="text-4xl mt-2 mb-1">🌬️</div>
          <p className="text-lg font-semibold">{windSpeed}</p>
        </div>

        {/* Humidity Card */}
        <div className="flex-1 bg-gray-200 p-4 rounded-lg flex flex-col items-center justify-center">
          <p className="text-sm text-gray-500">Humidity</p>
          <div className="text-4xl mt-2 mb-1">💧</div>
          <p className="text-lg font-semibold">{humidity}</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
