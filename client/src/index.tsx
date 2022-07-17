import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RootStateProvider } from './Store/RootStateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RootStateProvider>
    <App />
    </RootStateProvider>
  </React.StrictMode>
);
