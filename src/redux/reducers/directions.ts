import { actionTypes } from '../actions/actionTypes';
import { DirectionsStateType } from '../types/GlobalState';

export const directions = (state = {}, {type, path, totalDistance, totalTime}): DirectionsStateType => {
  switch (type) {
    case actionTypes.UPDATE_DELIVERY_ROUTE_INFORMATION:
      return Object.assign({}, state, { path, totalDistance, totalTime});
    default:
      return state;
  }
};