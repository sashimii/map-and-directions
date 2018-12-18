import { PredictionsStateType } from '../types/GlobalState';

export const predictions = (
  state: PredictionsStateType = {},
  { type, formInputType, predictions },
): PredictionsStateType => {
  switch (type) {
    case 'UPDATE_PREDICTIONS':
      return Object.assign({}, state, { [formInputType]: predictions });
    case 'CLEAR_PREDICTIONS':
      return {};
    default:
      return state;
  }
};