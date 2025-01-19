import React, { useState, useEffect } from "react";
import "./Styles/Footer.css";

const Footer = () => {
  const [missedCallsCount, setMissedCallsCount] = useState(0);

  useEffect(() => {
    const fetchMissedCalls = async () => {
      const response = await fetch("https://aircall-api.onrender.com/activities");
      const data = await response.json();
      const missedCount = data.filter(
        (call) => call.call_type === "missed" && !call.is_archived
      ).length;
      setMissedCallsCount(missedCount);
    };

    fetchMissedCalls();
  }, []);

  return (
    <footer className="footer">
      <div className="button-container">
        <div className="phone-icon-wrapper">
          <button className="footer-button phone-button">📞</button>
          {missedCallsCount > 0 && <span className="missed-calls-badge">{missedCallsCount}</span>}
        </div>
      </div>
      <button className="footer-button">👤</button>
      <button className="footer-button">
        <img
          className="footer-button"
          id="dialpad"
          src="public/emblems/apps.png"
          alt="dialpad"
          width="16px"
          height="16px"
        />
      </button>
      <button className="footer-button">⚙️</button>
      <button className="footer-button" id="green-dot">
        ●
      </button>
    </footer>
  );
};

export default Footer;
// {missedCallsCount > 0 && (
//   <span className="missed-calls-badge">
//     <strong>{missedCallsCount}</strong>
//   </span>
// )}
