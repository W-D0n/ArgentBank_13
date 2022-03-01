import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/main.css'
import App from './App'
// import { store } from './middleware/store';

/**
 * the root of the app, linked to the #root div in index.html.
 * Implement the store provider (redux), the global style elements and the App component.
 * 
 * @file Argent Bank - JSDOC 
 * @author Wardi Kamal
 * @see <a href="https://github.com/WARDI-Kamal/WARDI-Kamal_13_28022022" target="_blank">GitHub</a> | <a href="https://wardi-kamal-13-28022022.vercel.app/" target="_blank">Vercel</a>
 * 
 * @namespace _index
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
