import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/components/app';
import { Provider } from 'react-redux';
import { initStore } from './client/store';
import * as serviceWorker from './serviceWorker';
import {getCars} from './mock';
ReactDOM.render(
  <Provider store={initStore(getCars())}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
