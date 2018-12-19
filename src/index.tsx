import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import './scss/global.scss';

import { App } from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

const app = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app-container'),
  );
};

app();