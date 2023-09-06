import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DarkModeProvider } from "./components/DarkModeContext";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


console.log('App component rendered');