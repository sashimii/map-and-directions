import axios from 'axios';
import { actionTypes } from './actionTypes';

const API_URI = `http://localhost:8080/route`;

const tokenizeUri = token => `${API_URI}/${token}`;

export const flagServerError = () => {
  return {
    type: actionTypes.FLAG_SERVER_ERROR,
    error: '500 Internal Server Error',
  };
};

export const updateSubmissionToken = token => {
  return {
    type: actionTypes.UPDATE_SUBMISSION_TOKEN,
    token,
  };
};

export const flagAsInProgress = status => {
  return {
    type: actionTypes.FLAG_AS_IN_PROGRESS,
    status,
  };
};

export const flagAsFailure = (status, error) => {
  return {
    type: actionTypes.FLAG_AS_FAILURE,
    status,
    error,
  };
};

export const flagAsSuccess = status => {
  return {
    type: actionTypes.FLAG_AS_SUCCESS,
    status,
  };
};

export const updateDeliveryRouteInformation = (path, totalDistance, totalTime) => {
  return {
    type: actionTypes.UPDATE_DELIVERY_ROUTE_INFORMATION,
    path,
    totalDistance,
    totalTime,
  };
};

export const postLocations = locations => dispatch => {
  return axios.post(API_URI, locations)
              .then(response => {
                console.log(response) // tslint:disable-line

                return axios.get(tokenizeUri(response.data.token));
              })
              .catch(e => {
                console.log(e) // tslint:disable-line
                dispatch(flagServerError());
              });
};

export const getDrivingRoute = (locations, token = '') => dispatch => {

  const handleResponses = response => {
    const {data} = response;
    const {status} = response.data;
    // console.log(status); // tslint:disable-line
    switch (status) {
      case 'in progress':
        dispatch(flagAsInProgress(status));
        return getDrivingRoute(locations, token)(dispatch);
      case 'success':
        const { path, total_distance, total_time } = data;
        dispatch(flagAsSuccess(status));
        dispatch(updateDeliveryRouteInformation(path, total_distance, total_time));
        break;
      case 'failure':
      default:
        const { error } = data;
        dispatch(flagAsFailure(status, error));
        break;
    }
  };

  if (token.length > 0) {
    return axios.get(tokenizeUri(token))
                .then(handleResponses)
                .catch(e => {
                  dispatch(flagServerError());
                });
  } else {
    return postLocations(locations)(dispatch)
            .then(handleResponses) // tslint:disable-line
            .catch(e => {
              dispatch(flagServerError());
            }) // tslint:disable-line
  }

};