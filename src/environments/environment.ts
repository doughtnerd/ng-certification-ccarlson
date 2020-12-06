// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apis: {
    weatherApi: "https://api.openweathermap.org/data/2.5/weather",
    forecastApi: "https://api.openweathermap.org/data/2.5/forecast/daily",
  },
  keys: {
    weatherAppId: "c6d21b3e9272976b6f9df390db13ebc6",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
