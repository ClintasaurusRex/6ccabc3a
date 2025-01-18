import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="tabs">
        <button className="tab active">Inbox</button>
        <button className="tab">All Calls</button>
      </div>
      <button className="archive-button">Archive All Calls</button>
    </header>
  );
};

export default Header;
