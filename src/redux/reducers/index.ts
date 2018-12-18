import { combineReducers } from 'redux';

import { GlobalState } from '../types/GlobalState';

import { directions } from './directions';
import { locations } from './locations';
import { predictions } from './predictions';
import { resourceRetrievalStatus } from './serverStatus';

export default combineReducers<GlobalState>({
  predictions,
  locations,
  directions,
  resourceRetrievalStatus,
});