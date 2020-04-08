import { combineReducers } from 'redux';

import { GlobalState } from '../types/GlobalState';

import { covidTimeSeries } from './covidTimeSeries';
import { allDates, currentDate } from './dates';

export default combineReducers<any>({
  allDates, currentDate, covidTimeSeries,
});