import cv from "../images/Sam Hodgkinson CV_2023_April.pdf";
// import something from '../'
import "../App.css";

function App({ setShowPDF, showPDF }) {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "Sam Hodgkinson CV_2023_April.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header-container" id="home">
      <h1 className="sam-h">Sam Hodgkinson</h1>
      <p className="sam-h-tech-stack">React | Typescript | TailwindCSS | Redux | British Army Veteran</p>
      <p className="sam-h-tech-stack">
        <span className="footer-link footer-contact header-link">LinkedIn</span>|<span className="footer-link footer-contact header-link">E-Mail</span>|
        <span className="footer-link footer-contact header-link">Contact Form</span>
      </p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap", width: "100%" }}></div>
      <p className="sam-h-tech-stack">
        <button onClick={downloadCV}>Download CV</button>
        {/* <button onClick={() => setShowPDF(!showPDF)}>CV Viewer</button> */}
      </p>
    </header>
  );
}

export default App;
