// Package imports
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Component imports
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import MobileNavbar from "./components/MobileNavbar.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import Portfolio from "./components/Portfolio.jsx";
import PDFViewer from "./components/PDFViewer.jsx";

// Style imports
import "./components/Styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function App() {
  const [showPDF, setShowPDF] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactTitle, setContactTitle] = useState("");
  const [contactBody, setContactBody] = useState("");

  return (
    <React.StrictMode>
      {window.innerWidth < 600 && <MobileNavbar />}
      {window.innerWidth > 600 && (
        <Navbar
          contactModalOpen={contactModalOpen}
          setContactModalOpen={setContactModalOpen}
          contactTitle={contactTitle}
          setContactTitle={setContactTitle}
          contactBody={contactBody}
          setContactBody={setContactBody}
        />
      )}
      <Header setShowPDF={setShowPDF} showPDF={showPDF} />
      {showPDF === true && <PDFViewer />}
      <About />
      <Portfolio />
      <Footer
        contactModalOpen={contactModalOpen}
        setContactModalOpen={setContactModalOpen}
        contactTitle={contactTitle}
        setContactTitle={setContactTitle}
        contactBody={contactBody}
        setContactBody={setContactBody}
      />
    </React.StrictMode>
  );
}

root.render(<App />);
