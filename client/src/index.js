// Package imports
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Component imports
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import PDFViewer from "./components/PDFViewer";

// Style imports
import "./components/Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <React.StrictMode>
      {window.innerWidth < 600 && <MobileNavbar />}
      {window.innerWidth > 600 && <Navbar />}
      <Header setShowPDF={setShowPDF} showPDF={showPDF} />
      {showPDF === true && <PDFViewer />}
      <About />
      <Portfolio />
      <Footer />
    </React.StrictMode>
  );
}

root.render(<App />);
