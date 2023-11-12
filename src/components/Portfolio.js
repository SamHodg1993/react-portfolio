import React from "react";
import SeanTrussHighlands from "../images/SeanTrussHighlands.jpg";
import PortfolioScreenshot from "../images/PortfolioScreenshot.png";
import DressCodeScreenshot from "../images/DressCodeScreenshot.jpg";
import Razorthorn from "../images/Razorthorn.jpg";
import Argyll from "../images/Argyll.jpg";
import "./Styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container" id="portfolio">
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
                window.alert("Sorry, this is a private repository");
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
                window.alert("Sorry, this is a private repository");
              }}
              target="_blank"
              rel="noreferrer"
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
          <img src={Razorthorn} alt="Pic of dresscode application for teachers" className="portfolio-screenshot" />
          {window.innerWidth > 1200 && <p className="portfolio-card-details">Razors Edge</p>}
          {window.innerWidth > 1200 && <p className="portfolio-card-details">React | Vulnerability Manager | Service Offering | MYSQL | Full Stack</p>}
          <span className="portfolio-nav-span">
            <p
              className="private-repo"
              onClick={() => {
                window.alert("Sorry, this is a private repository");
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
                window.alert("Coming soon...");
              }}
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
