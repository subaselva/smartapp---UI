// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { EnvironmentConfiguration } from "../app/models/environment-configuration";



const localhostUrl = 'https://localhost:7044/api';
//const serverUrl = 'https://lsc-table-booking-app-api.azurewebsites.net/api';

// The list of file replacements can be found in `angular.json`.
export const environment: EnvironmentConfiguration = {
  env_name: 'dev',
  production: false,
  apiUrl: localhostUrl,
  apiEndpoints: {
    getRestaurants: 'Restaurant/restaurants',
    getRestaurantBranches: 'Restaurant/branches',
    getDiningTables: 'Restaurant/diningtables',
    updateReservation: 'Reservation/CheckIn',
    saveReservation: 'Restaurant',
    getReservationDetails:'Restaurant/getreservations',
    getContact:'Contact/send'

  },
  
  cacheTimeInMinutes: 30,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.