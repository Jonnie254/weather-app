'use client';
import React, { useState } from 'react';
import {
  Sun,
  Moon,
  ThermometerSun,
  ThermometerSnowflake
} from 'lucide-react';

type NavbarProps = {
  onCityChange: (city: string) => void;
  onUnitChange: (unit: 'metric' | 'imperial') => void;
  currentUnit: 'metric' | 'imperial';
};

const Navbar: React.FC<NavbarProps> = ({ onCityChange, onUnitChange, currentUnit }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      console.log("City Search Triggered:", city.trim()); 
      onCityChange(city.trim());
      setCity(''); 
    }
  };

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white text-gray-800">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <h2 className="text-gray-600 text-3xl font-semibold">Weather</h2>
          <Sun className="w-8 h-8 text-yellow-400 mt-1" />
        </div>

        {/* Search */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white
             text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={handleSearch}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors cursor-pointer"
          >
            Go
          </button>
        </div>

        {/* Unit Toggle */}
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
          <button
  onClick={() => {
    console.log("Unit Change Triggered: Celsius");
    onUnitChange('metric');
  }}
  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors cursor-pointer ${
    currentUnit === 'metric'
      ? 'bg-gray-500 text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  }`}
>
  <ThermometerSun className="w-4 h-4" />
  Celsius
</button>

<button
  onClick={() => {
    console.log("Unit Change Triggered: Fahrenheit");
    onUnitChange('imperial');
  }}
  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors cursor-pointer ${
    currentUnit === 'imperial'
      ? 'bg-gray-500 text-white'
      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
  }`}
>
  <ThermometerSnowflake className="w-4 h-4" />
  Fahrenheit
</button>

          </div>

          {/* Theme toggle placeholder */}
          <button
            onClick={() => alert("Dark mode toggle will be added later")}
            className="p-2 rounded-full bg-gray-100 text-gray-800 hover:scale-105 transition-transform cursor-pointer"
            aria-label="Toggle theme (placeholder)"
          >
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
