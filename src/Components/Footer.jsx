import React from "react";
import "./Styles/Footer.css";
// import dialpadIcon from "../../public/emblems/dialpad_24dp_75FB4C_FILL0_wght400_GRAD0_opsz24.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <button className="footer-button">📞</button>
      <button className="footer-button">👤</button>
      <button className="footer-button">
        <img
          className="footer-button"
          id="dialpad"
          src="public/emblems/dialpad_20dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.png"
          alt="dialpad"
        />
      </button>
      <button className="footer-button">⚙️</button>
      <button className="footer-button">⚙️</button>
    </footer>
  );
};

export default Footer;
