import React from "react";
import "./Styles/TabBar.css";
const TabBar = ({ activeTab, setActiveTab, onArchiveAll, onUnarchiveAll }) => {
  return (
    <div className="tabs">
      <div className="act-arch-btns">
        <button onClick={() => setActiveTab("activity")}>Activity Feed</button>
        <button onClick={() => setActiveTab("archived")}>Archived</button>
      </div>

      <div className="actions">
        {activeTab === "activity" ? (
          <button className="archive-all" onClick={onArchiveAll}>
            <img className="button-icon" src="public/emblems/archive.png" alt="activity" />
            Archive all calls
          </button>
        ) : (
          <button className="archive-all" onClick={onUnarchiveAll}>
            <img className="button-icon" src="public/emblems/archive.png" alt="activity" />
            Unarchive All
          </button>
        )}
      </div>
    </div>
  );
};

export default TabBar;
