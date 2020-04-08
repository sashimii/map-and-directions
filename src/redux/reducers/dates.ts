import { actionTypes } from '../actions/actionTypes';

import * as data from '../../data/time-series.json';

const dates = Object.keys(data);
const INITIAL_STATE = dates[0];

export const allDates = (state = dates, { type }) => {
    switch (type) {
        default:
            return dates;
    }
};

export const currentDate = (state = INITIAL_STATE, {type, index}) => {
    switch (type) {
        case actionTypes.UPDATE_CURRENT_DATE:
            return dates[index];
        default:
            return state;
    }
};