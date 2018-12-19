import { Location } from '../types/GlobalState';
import { actionTypes } from './actionTypes';

export const updateLocationFieldValue = (locationType: Location, value: string) => {
  return {
    type: actionTypes.UPDATE_LOCATION_FIELD_VALUE,
    locationType,
    value,
  };
};

export const clearLocationFieldValue = () => {
  return {
    type: actionTypes.CLEAR_LOCATION_FIELD_VALUE,
  };
};