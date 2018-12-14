import * as React from 'react';
import { TextForm } from './ui/TextForm';

interface AppProps {}

export const App: React.SFC<AppProps> = ({}) => (
  <>
    <TextForm
      label="Starting Location"
      name="start"
      handleChange={e => console.log(e.target.value) } // tslint:disable-line
    />
    <TextForm
      label="Destination"
      name="destination"
      handleChange={e => console.log(e.target.value) } // tslint:disable-line
    />
  </>
);