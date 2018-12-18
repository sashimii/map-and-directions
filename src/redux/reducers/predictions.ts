import { actionTypes } from '../actions/actionTypes';
import { PredictionsStateType } from '../types/GlobalState';

export const predictions = (
  state: PredictionsStateType = {},
  { type, formInputType, predictions },
): PredictionsStateType => {
  switch (type) {
    case actionTypes.UPDATE_PREDICTIONS:
      return Object.assign({}, state, { [formInputType]: predictions });
    case actionTypes.CLEAR_PREDICTIONS:
      return {};
    default:
      return state;
  }
};