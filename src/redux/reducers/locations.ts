import { actionTypes } from '../actions/actionTypes';
import { LocationsStateType } from '../types/GlobalState';

export const locations = (
  state: LocationsStateType = {},
  { type, locationType, value },
): LocationsStateType => {
  switch (type) {
    case actionTypes.UPDATE_LOCATION_FIELD_VALUE:
      return Object.assign({}, state, { [locationType]: value });
    default:
      return state;
  }
};