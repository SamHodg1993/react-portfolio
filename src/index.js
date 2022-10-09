import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {window.innerWidth < 1200 && <MobileNavbar />}
    {window.innerWidth > 1200 && <Navbar />}
    <Header />
    <About />
  </React.StrictMode>
);
