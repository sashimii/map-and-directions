import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/global.scss';

import { App } from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

// import GooglePlaces from './lib/GooglePlaces';

// const places = new GooglePlaces();

// places.fetchPlacePredictions('Indian Foodl').then(console.log); // tslint:disable-line

// const GoogleMapsAPI: any = places.getGoogleMapsAPI();

// GoogleMapsAPI.then(service => {
//   const autocompleteService: any = new service.maps.places.AutocompleteService();
//   console.log('SERVICE', autocompleteService); // tslint:disable-line

//   autocompleteService.getPlacePredictions(
//     {
//       input: 'innocent',
//     },
//     (arr) => { console.log('ARRAY', arr)}  // tslint:disable-line
//   );
// });

const app = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-container'),
  );
};

app();