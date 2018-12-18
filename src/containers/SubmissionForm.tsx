import * as React from 'react';
import { connect } from 'react-redux';

import { Location, LocationsStateType, ResourceRetrievalStatusStateType } from '../redux/types/GlobalState';
import LocationFormInput from './LocationFormInputs';

import { getDrivingRoute, postLocations } from '../redux/actions/submission';

interface SubmissionFormProps {
  locations: LocationsStateType;
  directions: any;
  fetchStatus: ResourceRetrievalStatusStateType;
  handleSubmit(): Function;
}

export const SubmissionForm: React.SFC<SubmissionFormProps> = ({ locations, directions, fetchStatus, handleSubmit }) => (
  <div>
    <LocationFormInput
      locationType={Location.starting}
    />
    <LocationFormInput
      locationType={Location.destination}
    />
    <button
      onClick={handleSubmit}
      disabled={(!locations.starting || !locations.destination)}
    >
      Submit
    </button>
    {
      fetchStatus && (
        <div>
          <p>{fetchStatus.status}</p>
          <p>{fetchStatus.error}</p>
        </div>
      )
    }
    {
      directions && (
        <ul>
          <li>{directions.path}</li>
          <li>{directions.totalDistance}</li>
          <li>{directions.totalTime}</li>
        </ul>
      )
    }
  </div>
);

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubmissionForm);