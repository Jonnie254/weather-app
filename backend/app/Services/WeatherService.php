<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Carbon\Carbon;

class WeatherService
{
    public function fetchWeatherData(string $city, string $units = 'metric')
    {
        $apiKey = 'ca2af056071bc87eb4b383cded5cc3d1';

        // Step 1: Get current weather
        $weatherRes = Http::get('https://api.openweathermap.org/data/2.5/weather', [
            'q' => $city,
            'units' => $units,
            'appid' => $apiKey
        ]);

        if ($weatherRes->failed()) {
            Log::error('Weather API error (current)', [
                'city' => $city,
                'units' => $units,
                'status' => $weatherRes->status(),
                'body' => $weatherRes->body()
            ]);
            return ['error' => 'Failed to fetch current weather data.'];
        }

        $current = $weatherRes->json();

        // Step 2: Get forecast
        $forecastRes = Http::get('https://api.openweathermap.org/data/2.5/forecast', [
            'q' => $city,
            'units' => $units,
            'appid' => $apiKey
        ]);

        if ($forecastRes->failed()) {
            Log::error('Weather API error (forecast)', [
                'city' => $city,
                'units' => $units,
                'status' => $forecastRes->status(),
                'body' => $forecastRes->body()
            ]);
            return ['error' => 'Failed to fetch forecast data.'];
        }

        $forecastData = $forecastRes->json();

        // Step 3: Process forecast into daily summaries
        $daily = [];
        foreach ($forecastData['list'] as $entry) {
            $date = substr($entry['dt_txt'], 0, 10);
            $carbonDate = Carbon::parse($date)->format('j M'); 
            if (!isset($daily[$carbonDate])) {
                $daily[$carbonDate] = [
                    'temperature' => $entry['main']['temp'],
                    'description' => $entry['weather'][0]['description'],
                    'humidity' => $entry['main']['humidity'],
                    'wind_speed' => $entry['wind']['speed'],
                ];
            }
        }
        
        // Step 4: Remove today, keep next 3 days
        $today = date('Y-m-d');
        unset($daily[$today]);
        $forecast = array_slice($daily, 0, 3);

        // Step 5: Combine everything
        return [
            'city' => $current['name'],
            'date' => date('Y-m-d'),
            'units' => $units,
            'weather' => [
                'temperature' => $current['main']['temp'],
                'description' => $current['weather'][0]['description'],
                'humidity' => $current['main']['humidity'],
                'wind_speed' => $current['wind']['speed'],
            ],
            'forecast' => $forecast
        ];
    }
}
