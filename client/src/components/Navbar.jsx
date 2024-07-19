import React, { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../images/SH.png";
import Select from "react-select";
import "./Styles/Navbar.css";

export default function Navbar() {
  const [selectedValue, setSelectedValue] = useState({ label: "Cheat sheets" });
  const handleSelect = (e) => {
    setSelectedValue(e);
    window.location.href = `https://sam-hodgkinson.co.uk${e.value}`;
  };

  return (
    <nav className="nav-container">
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
      </ul>
    </nav >
  );
}
