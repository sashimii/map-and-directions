import * as React from 'react';
import { connect } from 'react-redux';
import './SubmissionForm.scss';

import { Location, LocationsStateType, ResourceRetrievalStatusStateType } from '../redux/types/GlobalState';
import LocationFormInput from './LocationFormInputs';

import { actionTypes } from '../redux/actions/actionTypes';
import { clearPredictions } from '../redux/actions/autocomplete';
import { clearLocationFieldValue, updateLocationFieldValue } from '../redux/actions/location';
import { clearDeliveryRouteInformation, clearStatuses, getDrivingRoute } from '../redux/actions/submission';
import { Button } from '../ui/Button';
import { Status } from '../ui/Status';

interface SubmissionFormProps {
  locations: LocationsStateType;
  directions: any;
  fetchStatus: ResourceRetrievalStatusStateType;
  handleSubmit(): void;
  handleReset(): void;
}

export const SubmissionForm: React.SFC<SubmissionFormProps> = ({ locations, directions, fetchStatus, handleSubmit, handleReset }) => {
  const { starting, destination } = locations;
  const disableWhenNoLocations = ( starting.length === 0 || destination.length === 0);
  const disableWhenLoading = (
    fetchStatus.state &&
    (fetchStatus.state === actionTypes.FLAG_REQUEST_MADE ||
    fetchStatus.state === actionTypes.FLAG_AS_IN_PROGRESS)
  );
  return (
    <div className="submission-form">
      <div className="submission-form__section">
        <LocationFormInput
          locationType={Location.starting}
        />
        <LocationFormInput
          locationType={Location.destination}
        />
      </div>
      <div className="submission-form__section submission-form__section--padded">
        <Button
          handleClick={handleSubmit}
          disabled={disableWhenNoLocations || disableWhenLoading}
        >
          Submit
        </Button>
        <Button
          handleClick={handleReset}
          disabled={disableWhenNoLocations}
        >
          Reset
        </Button>
      </div>
      <div className="submission-form__section submission-form__section--padded">
        {
          fetchStatus && (
            <div>
              <Status colour={fetchStatus.colour}>{fetchStatus.message}</Status>
            </div>
          )
        }
      </div>
      <div className="submission-form__section submission-form__section--padded">
        {
          directions &&
          directions.totalDistance &&
          directions.totalTime &&
          (
            <div>
              <p>Total Distance: {directions.totalDistance}</p>
              <p>Total Time:{directions.totalTime}</p>
            </div>
          )
        }
      </div>
    </div>
  );
};

const mapStateToProps = ({ locations, directions, resourceRetrievalStatus }) => {
  return {
    locations,
    directions,
    fetchStatus: resourceRetrievalStatus,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { locations } = ownProps;
  return {
    handleSubmit: () => {
      getDrivingRoute(locations)(dispatch);
    },
    handleReset: () => {
      dispatch(clearPredictions());
      dispatch(clearLocationFieldValue());
      dispatch(clearDeliveryRouteInformation());
      dispatch(clearStatuses());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionForm);