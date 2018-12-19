import { actionTypes } from '../actions/actionTypes';
import { ResourceRetrievalStatusStateType } from '../types/GlobalState';

export const resourceRetrievalStatus = (
  state = {},
  { type, status, error},
): ResourceRetrievalStatusStateType => {
  switch (type) {
    case actionTypes.FLAG_REQUEST_MADE:
      return Object.assign({}, {
        state: actionTypes.FLAG_REQUEST_MADE,
      });
    case actionTypes.FLAG_AS_SUCCESS:
      return Object.assign({}, {
        state: actionTypes.FLAG_AS_SUCCESS,
        status,
        colour: 'green',
        message: 'Delivery Route Found',
      });
    case actionTypes.FLAG_AS_IN_PROGRESS:
      return Object.assign({}, {
        state: actionTypes.FLAG_AS_IN_PROGRESS,
        status,
        colour: 'yellow',
        message: 'Retrieving Delivery Route',
      });
    case actionTypes.FLAG_AS_FAILURE:
      return Object.assign({}, {
        state: actionTypes.FLAG_AS_FAILURE,
        status,
        error,
        colour: 'orange',
        message: error,
      });
    case actionTypes.FLAG_SERVER_ERROR:
      return Object.assign({}, {
        state: actionTypes.FLAG_SERVER_ERROR,
        status: '500 Internal Server Error',
        error,
        colour: 'red',
        message: 'Server Error: Try Again!',
      });
    case actionTypes.CLEAR_STATUSES:
      return Object.assign({});
    default:
      return state;
  }
};