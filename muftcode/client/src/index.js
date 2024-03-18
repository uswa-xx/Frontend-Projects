import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render( // Use ReactDOM.createRoot
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
