
import axios from 'axios';
import type { WeatherData } from '../interface/WeatherData';


export async function getWeather(city: string, units: string = 'metric'): Promise<WeatherData> {
  const response = await axios.get<WeatherData>(`http://127.0.0.1:8000/api/weather`, {
    params: {
      city,
      units,
    },
  });

  return response.data;
}
