import { delay } from 'redux-saga';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchAutocomplete, updatePredictions } from '../actions/autocomplete';

import { fetchPlacePredictions, GooglePlacesAPI } from '../../lib/GooglePlaces';

// Throttle Input & Override with Latest Search Options

export function* autocompleteSaga() {
  yield all([takeLatest(fetchAutocomplete, handleAutocomplete)]);
}

function* handleAutocomplete(action) {
  yield call(delay, 500);
  const { locationType, query } = action;
  const results = yield call(fetchPlacePredictions, query);
  yield put(updatePredictions(locationType, results));
}