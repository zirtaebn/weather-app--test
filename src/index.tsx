import './index.css';
import App from './App';
import { queryClient } from './utils/queryClient';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';

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
