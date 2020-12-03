export type WeatherData = {
    cityId: number;
    zipCode: string
    currentTemperature: number;
    minimumTemperature: number;
    maximumTemperature: number;
    condition: string;
    conditionDescription: string;
    cityName: string;
    countryName: string;
    icon: string;
};
