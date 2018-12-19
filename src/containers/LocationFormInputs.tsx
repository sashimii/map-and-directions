import * as React from 'react';
import { connect } from 'react-redux';
import { Location } from '../redux/types/GlobalState';

import { clearPredictions, fetchAutocomplete } from '../redux/actions/autocomplete';
import { updateLocationFieldValue } from '../redux/actions/location';

import { AutoDropdown } from '../ui/AutoDropdown';
import { TextForm } from '../ui/TextForm';

interface LocationFormInputProps {
  name: string;
  locationType: Location;
  predictions: Array<any>;
  location: string;
  updatePrediction(value: string): void;
  updateLocation(value: string): void;
}

export const LocationFormInput: React.SFC<LocationFormInputProps> = ({ locationType, predictions, location, updatePrediction, updateLocation }) => {

  return (
    <>
      <TextForm
        label={`${locationType.charAt(0).toUpperCase() + locationType.slice(1)} Location`}
        name={locationType}
        value={location}
        handleChange={e => {
          updateLocation(e.target.value);
          updatePrediction(e.target.value);
        }}
      >
        <AutoDropdown
          list={ predictions[locationType] && predictions[locationType].map(prediction => prediction.description) }
          handleSelect={item => updateLocation(item)}
        />
      </TextForm>
    </>
  );
};

const mapStateToProps = ({ predictions, locations }, ownProps) => {
  const { locationType } = ownProps;
  return {
    predictions,
    location: locations[locationType],
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { locationType } = ownProps;
  return {
    updatePrediction: (value: string) => {
      value.length > 0 ?
          dispatch(fetchAutocomplete(locationType, value))
        : dispatch(clearPredictions());
    },
    updateLocation: (value: string) => {
      dispatch(updateLocationFieldValue(locationType, value));
      dispatch(clearPredictions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationFormInput);
