export type WeatherData = {
    cityId: number;
    zipCode: number
    currentTemperature: number;
    minimumTemperature: number;
    maximumTemperature: number;
    condition: string;
    conditionDescription: string;
    cityName: string;
    countryName: string;
};
