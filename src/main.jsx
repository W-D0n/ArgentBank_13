// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";

// Components
import App from './App/App';
// Styles
import './main.css';

/**
 * the root of the app, linked to the #root div in index.html.
 * Implement the store provider (redux), the global style elements and the App component.
 * 
 * @file Argent Bank - JSDOC 
 * @author Wardi Kamal
 * @see <a href="https://github.com/WARDI-Kamal/WARDI-Kamal_13_28022022" target="_blank">GitHub</a>
 * 
 * @memberof main
 */

let persistor = persistStore(store);

ReactDOM.render(
  < React.StrictMode >
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
