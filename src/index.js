import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import './assets/fonts/Dongle-Bold.ttf';
import './assets/fonts/VT323-Regular.ttf';
import './assets/fonts/RobotoMono-Regular.ttf';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />,
  </BrowserRouter>,
  document.getElementById('root')
);
