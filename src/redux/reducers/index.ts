import { combineReducers } from 'redux';

import { GlobalState } from '../types/GlobalState';

import { predictions } from './predictions';

export default combineReducers<GlobalState>({
  predictions,
});