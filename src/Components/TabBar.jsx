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
            <svg
              className="button-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#666666"
            >
              <path d="m480-276 144-144-51-51-57 57v-150h-72v150l-57-57-51 51 144 144ZM216-624v408h528v-408H216Zm-72 480v-576l96-96h480l96 96v576H144Zm78-552h516l-48-48H270l-48 48Zm258 276Z" />
            </svg>
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
{
  /* <img className="button-icon" src="public/emblems/archive.png" alt="activity" /> */
}
