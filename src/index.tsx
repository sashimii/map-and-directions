import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/global.scss';

import { App } from './App';

import GooglePlaces from './lib/GooglePlaces';

const places = new GooglePlaces('<API_KEY>');

const GoogleMapsAPI: any = places.getGoogleMapsAPI();

GoogleMapsAPI.then(service => {
  const autocompleteService: any = new service.maps.places.AutocompleteService();
  console.log('SERVICE', autocompleteService); // tslint:disable-line

  autocompleteService.getPlacePredictions(
    {
      input: 'inno',
    },
    (arr) => { console.log('ARRAY', arr)}  // tslint:disable-line
  );
});

const app = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app-container'),
  );
};

app();