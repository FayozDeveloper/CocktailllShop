import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {OurProvider} from './setup/OurContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <OurProvider>
          <App/>
      </OurProvider>
  </React.StrictMode>
);
