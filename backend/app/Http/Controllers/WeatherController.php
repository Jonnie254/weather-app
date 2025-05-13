<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\WeatherService;

class WeatherController extends Controller
{
    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function getWeather(Request $request)
    {
        $city = $request->query('city');
        $units = $request->query('units', 'metric');

        if (!$city) {
            return response()->json(['error' => 'City is required.'], 400);
        }

        $weatherData = $this->weatherService->fetchWeatherData($city, $units);
        return response()->json($weatherData);
    }
}

