import { call, put, throttle } from 'redux-saga/effects';
import { actionTypes } from './actionTypes';

import GooglePlaces from '../../lib/GooglePlaces';

export const fetchAutocomplete = proposal => {
  return {
    type: actionTypes.FETCH_AUTOCOMPLETE,
    proposal,
  };
};

function* fetchGoogleAutocomplete(action) {
  // const places = new GooglePlaces();
  const autocompleteList = yield call();
}