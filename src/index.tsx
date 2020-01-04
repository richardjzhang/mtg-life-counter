import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';
import './index.css';

WebFont.load({
  google: {
    families: ['Acme:400,500,600,700', 'sans-serif']
  }
});

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
