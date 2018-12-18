import { delay } from 'redux-saga';
import { call, put, takeLatest, throttle } from 'redux-saga/effects';

import { Location } from '../types/GlobalState';
import { actionTypes } from './actionTypes';

export const updatePredictions = (formInputType: Location, predictions: Array<any>) => {
  return {
    type: actionTypes.UPDATE_PREDICTIONS,
    formInputType,
    predictions,
  };
};

export const clearPredictions = () => {
  return {
    type: actionTypes.CLEAR_PREDICTIONS,
  };
};

export const fetchAutocomplete = (locationType, query) => {
  return {
    type: actionTypes.FETCH_AUTOCOMPLETE,
    locationType,
    query,
  };
};

// export const fetchAutocomplete = proposal => (dispatch): void => {
//   new GooglePlaces().fetchPlacePredictions(proposal).then(dispatch);
// };
