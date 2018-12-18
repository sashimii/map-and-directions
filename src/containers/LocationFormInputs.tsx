import * as React from 'react';
import { connect } from 'react-redux';
import { Location } from '../redux/types/GlobalState';

import { clearPredictions, fetchAutocomplete, updatePredictions } from '../redux/actions/autocomplete';

import { AutoDropdown } from '../ui/AutoDropdown';
import { TextForm } from '../ui/TextForm';

interface LocationFormInputType {
  name: string;
  locationType: Location;
  predictions: Array<any>;
  updatePrediction: Function;
}

export const LocationFormInput: React.SFC<LocationFormInputType> = ({ locationType, predictions, updatePrediction }) => {

  const autocompleteList = predictions[locationType] && predictions[locationType].map(prediction => prediction.description);
  return (
    <>
      <TextForm
        label={`${locationType.charAt(0).toUpperCase() + locationType.slice(1)} Location`}
        name={locationType}
        handleChange={e => updatePrediction(e.target.value)}
      >
        <AutoDropdown
          list={autocompleteList}
        />
      </TextForm>
      {/* <ul>
        {
          predictions[locationType] && predictions[locationType].map(prediction => <li>{ prediction.description }</li>)
        }
      </ul> */}
    </>
  );
};

const mapStateToProps = ({ predictions }) => {
  return {
    predictions,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { locationType } = ownProps;
  return {
    updatePrediction: (value: string) => {
      // console.log(value.length); //tslint:disable-line
      value.length > 0 ?
          dispatch(fetchAutocomplete(locationType, value))
        : dispatch(clearPredictions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LocationFormInput);
