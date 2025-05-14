# Weather App

This is a full-stack weather application built using **Next.js** (frontend) and **Laravel** (backend API). It allows users to search for real-time weather data for any city globally and toggle between temperature units (Celsius/Fahrenheit). This project was developed as part of an interview assessment.

---

## Features

* **City Search** – Search weather conditions for any city
* **Unit Toggle** – Switch between Celsius and Fahrenheit
* **Forecast View** – 3-day weather forecast
* **Additional Info** – View wind speed and humidity
* **Live Updates** – Data fetched from OpenWeatherMap API
* **Responsive UI** – Built with Tailwind CSS and Lucide icons

---

## Tech Stack

### Frontend

* **Next.js 14** with App Router (`app/` directory)
* **React 18** (Client Components)
* **Tailwind CSS** for styling
* **Lucide-react** for icons

### Backend

* **Laravel 11** (API routes)
* **OpenWeatherMap API** integration

---

## Project Structure

```
weather-app/
├── app/
│   ├── page.tsx            # Main weather page
│   └── layout.tsx          # App shell layout
├── components/
│   ├── Navbar.tsx
│   ├── CurrentWeather.tsx
│   ├── ForecastCard.tsx
│   └── AdditionalInfo.tsx
├── lib/
│   └── getWeather.ts       # Fetches data from backend API
├── interface/
│   └── WeatherData.ts      # Type definitions
└── public/
    └── assets/             # Static files (e.g., icons)
```

---

## How It Works

1. **User enters a city** in the search bar
2. **Frontend** calls a `getWeather` function which fetches weather data from your **Laravel API**
3. **Laravel** forwards the request to **OpenWeatherMap**, processes it, and returns simplified JSON
4. Data is displayed in a clean, responsive UI with **unit toggling** and **forecast breakdown**

---

## Setup & Installation

### Frontend (Next.js)

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev

# Available at http://localhost:3000
```

### Backend (Laravel)

```bash
# Install dependencies
composer install

# Set up environment
cp .env.example .env
php artisan key:generate

# Set your OpenWeatherMap API key in .env
OPENWEATHERMAP_API_KEY=your_api_key_here

# Start the server
php artisan serve
```

---

## API Example

**Endpoint:** `GET /api/weather?city=Nairobi&units=metric`

**Sample Response:**

```json
{
  "city": "Nairobi",
  "date": "2025-05-14",
  "units": "metric",
  "weather": {
    "temperature": 24,
    "description": "Clear sky",
    "icon": "01d",
    "wind_speed": 5,
    "humidity": 60
  },
  "forecast": {
    "Tomorrow": {
      "temperature": 26,
      "description": "Sunny",
      "icon": "01d"
    },
    "DayAfter": {
      "temperature": 22,
      "description": "Partly cloudy",
      "icon": "02d"
    }
  }
}
```

---

## Screenshots

>![alt text](<Screenshot from 2025-05-14 17-41-31.png>)

---

##  License

This project is open-sourced for demonstration and interview purposes only.

---

##  Author

Developed by **\[Jonnie254]**
💻 [GitHub](https://github.com/jonnie254)

