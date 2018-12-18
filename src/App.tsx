import * as React from 'react';
import LocationFormInput from './containers/LocationFormInputs';
import SubmissionForm from './containers/SubmissionForm';
import { Location } from './redux/types/GlobalState';
import { TextForm } from './ui/TextForm';

interface AppProps {}

export const App: React.SFC<AppProps> = ({}) => (
  <>
    <SubmissionForm />
  </>
);
