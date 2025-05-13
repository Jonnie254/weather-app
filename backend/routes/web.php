<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WeatherController;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('api')->group(function () {
    Route::get('/weather', [WeatherController::class, 'getWeather']);
});
