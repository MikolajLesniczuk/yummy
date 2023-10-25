import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'frontend/components/App';
import './frontend/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/yummy">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
