import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';

const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
if (!codespaceName) {
  console.warn('VITE_CODESPACE_NAME is not defined. Set it in .env.local for Codespaces URLs. Falling back to localhost.');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
