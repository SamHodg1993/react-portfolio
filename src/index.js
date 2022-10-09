import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>
);
