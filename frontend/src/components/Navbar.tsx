'use client'
import React from 'react'
import {
  Sun,
  Moon,
  ThermometerSun,
  ThermometerSnowflake
} from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white text-gray-800">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <h2 className="text-gray-600 text-3xl font-semibold">Weather</h2>
          <Sun className="w-8 h-8 text-yellow-400 mt-1" />
        </div>

        {/* Search Section */}
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search city..."
            className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
            Go
          </button>
        </div>

        {/* Unit Toggle & Placeholder Theme Button */}
        <div className="flex gap-4 items-center">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md transition-colors">
              <ThermometerSun className="w-4 h-4" />
              Celsius
            </button>
            <div className="w-px h-6 bg-gray-300" />
            <button className="flex items-center gap-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-2 rounded-md transition-colors">
              <ThermometerSnowflake className="w-4 h-4" />
              Fahrenheit
            </button>
          </div>

          {/* Placeholder Theme Toggle Button */}
          <button
            onClick={() => alert("Dark mode toggle will be added later")}
            className="p-2 rounded-full bg-gray-100 text-gray-800 hover:scale-105 transition-transform"
            aria-label="Toggle theme (placeholder)">
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
