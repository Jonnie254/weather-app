
export type WeatherData = {
    city: string;
    date: string;
    units: string;
    weather: {
      temperature: number;
      description: string;
      humidity: number;
      wind_speed: number;
      icon: string;
    };
    forecast: {
      [date: string]: {
        icon: string;
        temperature: number;
        description: string;
        humidity: number;
        wind_speed: number;
      };
    };
  };
  