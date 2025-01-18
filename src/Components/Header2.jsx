import React, { useState } from "react";
import Inbox from "src/Components/AllCalls.jsx";
import AllCalls from "src/Components/Inbox.jsx";

const Header = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  return (
    <div>
      <header className="header">
        <div className="tabs">
          <button
            className={`tab ${activeTab === "inbox" ? "active" : ""}`}
            onClick={() => setActiveTab("inbox")}
          >
            Inbox
          </button>
          <button
            className={`tab ${activeTab === "allCalls" ? "active" : ""}`}
            onClick={() => setActiveTab("allCalls")}
          >
            All Calls
          </button>
        </div>
      </header>
      {activeTab === "inbox" ? <Inbox /> : <AllCalls />}
    </div>
  );
};

export default Header;
