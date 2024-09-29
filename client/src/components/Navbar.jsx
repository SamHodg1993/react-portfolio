import PropTypes from "prop-types";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/SH.png";
import Select from "react-select";
import "./Styles/Navbar.css";
import Modal from "react-modal";

export default function Navbar({
  contactModalOpen,
  setContactModalOpen,
  contactTitle,
  setContactTitle,
  contactBody,
  setContactBody,
}) {
  const [selectedValue, setSelectedValue] = useState({ label: "Cheat sheets" });
  const handleSelect = (e) => {
    setSelectedValue(e);
    window.location.href = `https://sam-hodgkinson.co.uk${e.value}`;
  };

  const sendContactRequest = (contactTitle, contactBody) => {
    axios
      .post(
        "https://sam-hodgkinson.co.uk/api/contact/send",
        {
          title: contactTitle,
          body: contactBody,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        console.log(res.data); // Correctly access response data
      })
      .catch((err) => console.error("Error:", err.response || err.message));
  };

  return (
    <nav className="nav-container">
      <Modal
        isOpen={contactModalOpen}
        onRequestClose={() => setContactModalOpen(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "350px",
            width: "400px",
            backgroundColor: "#242424",
            color: "white",
            textAlign: "center",
            borderRadius: "6px",
            border: "1px solid #50515B",
          },
          overlay: {
            backgroundColor: "rgba(1, 1, 1, 0.7)",
            zIndex: "10",
          },
          parent: {},
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          <input
            placeholder="Enter a title"
            style={{
              marginBottom: "2rem",
              padding: "0.3rem 0.6rem",
            }}
            onChange={(e) => setContactTitle(e.target.value)}
          />
          <textarea
            placeholder="Enter your message"
            style={{
              marginBottom: "2rem",
              padding: "0.3rem 0.6rem",
              height: "50%",
            }}
            onChange={(e) => setContactBody(e.target.value)}
          />
          <div
            style={{ display: "flex", position: "absolute", bottom: "10px" }}
          >
            <button
              style={{
                height: "2rem",
                width: "10rem",
                backgroundColor: "#181818",
              }}
              onClick={() => {
                sendContactRequest(contactTitle, contactBody);
              }}
            >
              Send
            </button>
            <button
              style={{
                height: "2rem",
                width: "10rem",
                backgroundColor: "#FF5555",
              }}
              onClick={() => setContactModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <img src={Logo} alt="Sam's Logo" className="nav-logo" />
      <ul className="nav-list">
        <Link smooth={true} offset={-100} duration={700} to="home">
          <li className="nav-item">Home</li>
          {/* <li className="nav-item" style={{ color: "green" }}>Home</li> */}
        </Link>
        <Select
          value={selectedValue.label || "Cheat Sheets"}
          placeholder="Cheat Sheets"
          options={[
            { label: "MySQL", value: "/mysql" },
            { label: "Linux", value: "/linux" },
            { label: "Golang", value: "/golang" },
            { label: "C++", value: "/cpp" },
            { label: "GIT", value: "/git" },
            { label: "JavaScript", value: "/js" },
            { label: "Python", value: "/python" },
            { label: "React", value: "/react" },
            { label: "Vim", value: "/vim" },
          ]}
          onChange={(e) => handleSelect(e)}
          className="react-select-container"
          classNamePrefix="react-select"
        />
        <Link smooth={true} offset={-100} duration={700} to="about">
          <li className="nav-item">About</li>
        </Link>
        <Link smooth={true} offset={0} duration={700} to="portfolio">
          <li className="nav-item">Portfolio</li>
        </Link>
        <Link smooth={true} offset={-50} duration={700} to="footer">
          <li className="nav-item">Contact</li>
        </Link>
        <button onClick={() => setContactModalOpen(true)}>Contact form</button>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  contactModalOpen: PropTypes.bool.isRequired,
  setContactModalOpen: PropTypes.func.isRequired,
  contactTitle: PropTypes.string.isRequired,
  setContactTitle: PropTypes.func.isRequired,
  contactBody: PropTypes.string.isRequired,
  setContactBody: PropTypes.func.isRequired,
};
