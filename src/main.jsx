// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';

// Components
import App from './App'
// Styles
import './main.css'

/**
 * the root of the app, linked to the #root div in index.html.
 * Implement the store provider (redux), the global style elements and the App component.
 * 
 * @file Argent Bank - JSDOC 
 * @author Wardi Kamal
 * @see <a href="https://github.com/WARDI-Kamal/WARDI-Kamal_13_28022022" target="_blank">GitHub</a> | <a href="https://wardi-kamal-13-28022022.vercel.app/" target="_blank">Vercel</a>
 * 
 * @memberof main
 */

ReactDOM.render(
  < React.StrictMode >
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
)
