import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {window.innerWidth < 1200 && <MobileNavbar />}
    {window.innerWidth > 1200 && <Navbar />}
    <Header />
    <About />
    <Portfolio />
    <Footer />
  </React.StrictMode>
);
