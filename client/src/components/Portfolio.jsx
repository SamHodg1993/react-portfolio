import React from "react";
import SeanTrussHighlands from "../images/SeanTrussHighlands.jpg";
import PortfolioScreenshot from "../images/PortfolioScreenshot.png";
import DressCodeScreenshot from "../images/DressCodeScreenshot.jpg";
import Razorthorn from "../images/Razorthorn.jpg";
import Argyll from "../images/Argyll.jpg";
import Modal from "react-modal";
import "./Styles/Portfolio.css";

function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState(<></>);

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40vw",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "1rem 2rem",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <div className="portfolio-container" id="portfolio">
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={modalStyle}>
        {modalContent}
      </Modal>

      <div className="portfolio-card-container">
        <div className="portfolio-card">
          <img src={SeanTrussHighlands} alt="RST pic" className="rst-image" />
          <span className="portfolio-nav-span">
            <a href="https://github.com/SamHodg1993/rst-mobile" target="_blank" rel="noreferrer">
              Repo
            </a>
            <a href="http://sams-apps.co.uk" target="_blank" rel="noreferrer">
              Site
            </a>
          </span>
          {window.innerWidth > 1200 && <p className="portfolio-card-details">Robert Summers Transport</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | TailwindCSS | React-Scroll</p>}
        </div>
        <div className="portfolio-card">
          <img src={PortfolioScreenshot} alt="Pic of portfolio" className="portfolio-screenshot" />
          <span className="portfolio-nav-span">
            <a href="https://github.com/SamHodg1993/react-portfolio" target="_blank" rel="noreferrer">
              Repo
            </a>
            <a href="http://sam-hodgkinson.co.uk" target="_blank" rel="noreferrer">
              Site
            </a>
          </span>
          {window.innerWidth > 1200 && <p className="portfolio-card-details">The source code for this website</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | TailwindCSS | React-Scroll | Full Stack</p>}
        </div>
        <div className="portfolio-card">
          {/* <div className="to-be-image">To be image</div> */}
          <img src={DressCodeScreenshot} alt="Pic of dresscode application for teachers" className="portfolio-screenshot" />
          {window.innerWidth > 1200 && <p className="portfolio-card-details">DressCode Website</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | Sass | MySQL | Full Stack | Node | Express | AWS | Colaborative</p>}
          <span className="portfolio-nav-span">
            <p
              className="private-repo"
              onClick={() => {
                // window.alert("Sorry, this is a private repository");
                setModalContent(
                  <div className="modal-container">
                    <h1 className="modal-title">DressCode</h1>
                    <p className="modal-text">This project is currently in development from a volunteer group called the Scottish Tech Army. As such has a private repo.</p>
                  </div>
                );
                setModalIsOpen(true);
              }}
            >
              Repo
            </p>
            <a href="https://dresscodedev.org.uk/" target="_blank" rel="noreferrer">
              Site
            </a>
          </span>
        </div>
        <div className="portfolio-card">
          {/* <div className="to-be-image">To be image</div> */}
          <img src={Argyll} alt="Pic of dresscode application for teachers" className="portfolio-screenshot" />
          {window.innerWidth > 1200 && <p className="portfolio-card-details">Argyll interactive map</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | Leaflet | Interactive Map | MYSQL | Full Stack | AWS | Colaborative</p>}
          <span className="portfolio-nav-span">
            <p
              className="private-repo"
              onClick={() => {
                // window.alert("Sorry, this is a private repository");
                setModalContent(
                  <div className="modal-container">
                    <h1 className="modal-title">Argyll</h1>
                    <p className="modal-text">This project is currently in development from a volunteer group called the Scottish Tech Army. As such has a private repo.</p>
                  </div>
                );
                setModalIsOpen(true);
              }}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </p>
            <p
              className="private-repo"
              onClick={() => {
                // window.alert("Coming soon...");
                setModalContent(
                  <div className="modal-container">
                    <h1 className="modal-title">Argyll</h1>
                    <p className="modal-text">This project is currently in development. Please check back soon for updates.</p>
                  </div>
                );
                setModalIsOpen(true);
              }}
              target="_blank"
              rel="noreferrer"
            >
              Site
            </p>
          </span>
        </div>
        <div className="portfolio-card">
          {/* <div className="to-be-image">To be image</div> */}
          <img src={Razorthorn} alt="Pic of dresscode application for teachers" className="portfolio-screenshot" />
          {window.innerWidth > 1200 && <p className="portfolio-card-details">Razors Edge</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | Vulnerability Manager | Service Offering | MYSQL | Full Stack</p>}
          <span className="portfolio-nav-span">
            <p
              className="private-repo"
              onClick={() => {
                // window.alert("Sorry, this is a private repository");
                setModalContent(
                  <div className="modal-container">
                    <h1 className="modal-title">Razors Edge</h1>
                    <p className="modal-text">
                      This is an invite only production solution for large scale vulnerability management. If you are interested in this service, please visit the Razorthorn
                      website and contact them for more information.
                    </p>
                    <a href="https://www.razorthorn.com/contact-us/" target="_blank" rel="noreferrer" className="modal-link">
                      Razorthorn Website
                    </a>
                  </div>
                );
                setModalIsOpen(true);
              }}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </p>
            {/* <a href="https://dresscodedev.org.uk/" target="_blank" rel="noreferrer">
              Site
            </a> */}
            <p
              className="private-repo"
              onClick={() => {
                // window.alert(
                //   "This is an invite only production solution for large scale vulnerability management... Interested? See https://www.razorthorn.com/contact-us/ for more information"
                // );
                setModalContent(
                  <div className="modal-container">
                    <h1 className="modal-title">Razors Edge</h1>
                    <p className="modal-text">
                      This is an invite only production solution for large scale vulnerability management. If you are interested in this service, please visit the Razorthorn
                      website and contact them for more information.
                    </p>
                    <a href="https://www.razorthorn.com/contact-us/" target="_blank" rel="noreferrer" className="modal-link">
                      Razorthorn Website
                    </a>
                  </div>
                );
                setModalIsOpen(true);
              }}
              target="_blank"
              rel="noreferrer"
            >
              Site
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
