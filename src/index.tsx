import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { makeServer } from './fake-server';

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
