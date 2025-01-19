import React from "react";
import useApi from "./hooks/useApi";

const Buttons = ({ activeTab, setActiveTab }) => {
  const { archiveAll, unarchiveAll } = useApi();

  return (
    <div className="tabs">
      <button onClick={() => setActiveTab("activity")}>All Calls</button>
      <button onClick={() => setActiveTab("archived")}>Archived</button>

      <div className="actions">
        {activeTab === "activity" ? (
          <button onClick={archiveAll}>Archive All</button>
        ) : (
          <button onClick={unarchiveAll}>Unarchive All</button>
        )}
      </div>
    </div>
  );
};

export default Buttons;
