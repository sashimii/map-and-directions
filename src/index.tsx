import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './scss/global.scss';

import { App } from './App';

import * as Places from 'google-places-web';

const app = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app-container'),
  );
};

app();