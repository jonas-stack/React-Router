import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Create the root of the React application and render it
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* Wrap the App component with BrowserRouter to enable routing */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);