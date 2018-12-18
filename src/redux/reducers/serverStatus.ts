import { actionTypes } from '../actions/actionTypes';

export const resourceRetrievalStatus = (state = {}, { type, status, error} ) => {
  switch (type) {
    case actionTypes.FLAG_AS_SUCCESS:
      return Object.assign({}, { status });
    case actionTypes.FLAG_AS_IN_PROGRESS:
      return Object.assign({}, { status });
    case actionTypes.FLAG_AS_FAILURE:
      return Object.assign({}, { status, error });
    case actionTypes.FLAG_SERVER_ERROR:
      return Object.assign({}, { error });
    default:
      return state;
  }
};