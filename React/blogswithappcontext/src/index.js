import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from "../src/context/context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
reportWebVitals();
