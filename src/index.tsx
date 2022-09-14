import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';

import App from './App';
import { queryClient } from './utils/queryClient';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <App />

    </QueryClientProvider>
  </React.StrictMode>
);
