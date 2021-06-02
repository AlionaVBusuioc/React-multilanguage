import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import lang from "./context/lang";
import LangState from './context/lang';

ReactDOM.render(
  <React.StrictMode>
    <LangState>
    <App />
    </LangState>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
