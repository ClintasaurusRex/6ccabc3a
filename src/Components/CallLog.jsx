import React, { useState, useEffect } from "react";
import "./Styles/CallLog.css";
import useApi from "./hooks/useApi";
import { useCallIcon } from "./hooks/useCallIcon";
import { useGrouped } from "./hooks/useGrouped";
// import Buttons from "./Buttons";

const CallLog = () => {
  // const [calls, setCalls] = useState([]);
  const [activeTab, setActiveTab] = useState("activity");
  const [selectedCall, setSelectedCall] = useState(null);
  const { getCallIcon } = useCallIcon();
  const { calls, loading, error, toggleArchive, archiveAll, unarchiveAll } = useApi();
  const groupedCalls = useGrouped(calls, activeTab);

  if (loading) {
    return <div className="loading">Loading calls...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="call-log">
      <div className="tabs">
        {/* <Buttons activeTab={activeTab} setActiveTab={setActiveTab} /> */}
        <div className="act-arch-btns">
          <button onClick={() => setActiveTab("activity")}> Activity Feed</button>
          <button onClick={() => setActiveTab("archived")}>Archived</button>
        </div>

        <div className="actions">
          {activeTab === "activity" ? (
            <button className="archive-all" onClick={archiveAll}>
              <img className="button-icon" src="public/emblems/archive.png" alt="activitiy" />
              Archive All
            </button>
          ) : (
            <button className="archive-all" onClick={unarchiveAll}>
              {" "}
              <img className="button-icon" src="public/emblems/archive.png" alt="activitiy" />
              Unarchive All
            </button>
          )}
        </div>
      </div>

      {Object.keys(groupedCalls).map((date) => (
        <div key={date}>
          <h2 className="date-separator">{date}</h2>
          {groupedCalls[date].map((call) => (
            <div key={call.id} className="call-log-item">
              <div className="call-icon-wrapper">{getCallIcon(call)}</div>
              <div className="call-details">
                <div className="number">+{call.from}</div>
                <div className="details">tried to call on {call.to}</div>
              </div>
              <div className="archive-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleArchive(call.id);
                  }}
                >
                  <img
                    src="public/emblems/verticalDots.png"
                    alt={call.is_archived ? "Unarchive" : "Archive"}
                    className="archive-icon"
                  />
                </button>
              </div>
              <div className="time">
                {new Date(call.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CallLog;

{
  /* <div className="archive-button">
<button
  onClick={(e) => {
    e.stopPropagation();
    toggleArchive(call.id);
  }}
>
  {call.is_archived ? "Unarchive" : "Archive"}
</button>
</div> */
}
