import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/reset.css';
import './css/style.css';
import { LoginProvider } from './Contexts/LoginContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <LoginProvider>

      <App />

    </LoginProvider>

  </React.StrictMode>,
)
