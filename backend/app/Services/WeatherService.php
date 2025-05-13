<?php
namespace App\Services;

use Illuminate\Support\Facades\Http;

class WeatherService
{
    public function fetchWeatherData(string $city, string $units = 'metric')
    {
        $apiKey = config('services.openweather.key');

        // Step 1: Get coordinates from Geocoding API
        $geoRes = Http::get('http://api.openweathermap.org/geo/1.0/direct', [
            'q' => $city,
            'limit' => 1,
            'appid' => $apiKey
        ]);

        if ($geoRes->failed() || empty($geoRes[0])) {
            return ['error' => 'Invalid city or failed to fetch location.'];
        }

        $location = $geoRes[0];
        $lat = $location['lat'];
        $lon = $location['lon'];

        // Step 2: Get weather data using One Call API
        $weatherRes = Http::get('https://api.openweathermap.org/data/2.5/onecall', [
            'lat' => $lat,
            'lon' => $lon,
            'exclude' => 'minutely,hourly,alerts',
            'units' => $units,
            'appid' => $apiKey
        ]);

        if ($weatherRes->failed()) {
            return ['error' => 'Failed to fetch weather data.'];
        }

        $data = $weatherRes->json();

        return [
            'city' => $city,
            'units' => $units,
            'location' => $location,
            'weather' => [
                'current' => $data['current'],
                'daily' => array_slice($data['daily'], 0, 4) // current day + next 3
            ]
        ];
    }
}
