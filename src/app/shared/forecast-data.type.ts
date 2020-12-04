import { WeatherData } from './weather-data.type';

export type ForecastData = {
    cityId: number;
    cityName: string;
    zipCode: string
    forecast: ForecastDataItem[];
};

export type ForecastDataItem = {
    currentTemperature: number;
    minimumTemperature: number;
    maximumTemperature: number;
    condition: string;
    conditionDescription: string;
    icon: string;
    date: string;
};
