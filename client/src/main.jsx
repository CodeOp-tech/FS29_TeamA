import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import './input.css';
import CartState from "./context/cart/CartState";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <CartState>
          <App />
        </CartState>
      </BrowserRouter>
  </React.StrictMode>
)
