import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import  {useState}from 'react';
//  import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client"

const container = document.getElementById('root')
const root = createRoot(container);

root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);
