import { BrowserRouter } from 'react-router';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import Routes from './Routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
