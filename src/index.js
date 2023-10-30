import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root')); // Create a root using createRoot
root.render(
  
    <BrowserRouter> 
      <App />
    </BrowserRouter>
);


reportWebVitals();
