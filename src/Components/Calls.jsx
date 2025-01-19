import React, { useState, useEffect } from "react";
import { useCallIcon } from "./hooks/useCallIcon";

function Calls(props) {
  const [calls, setCalls] = useState([]);
  const [activeTab, setActiveTab] = useState("activity");
  const [selectedCall, setSelectedCall] = useState(null);
  const { getCallIcon } = useCallIcon();

  useEffect(() => {
    fetchCalls();
  }, []);

  const fetchCalls = async () => {
    try {
      const response = await fetch("https://aircall-api.onrender.com/activities");
      const data = await response.json();
      setCalls(data);
    } catch (error) {
      console.error("Error fetching calls:", error);
    }
  };

  const toggleArchive = async (callId) => {
    try {
      const call = calls.find((c) => c.id === callId);
      await fetch(`https://aircall-api.onrender.com/activities/${callId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_archived: !call.is_archived }),
      });
      fetchCalls();
    } catch (error) {
      console.error("Error toggling archive:", error);
    }
  };

  const archiveAll = async () => {
    const promises = calls
      .filter((call) => !call.is_archived)
      .map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

  const unarchiveAll = async () => {
    const promises = calls.filter((call) => call.is_archived).map((call) => toggleArchive(call.id));
    await Promise.all(promises);
    fetchCalls();
  };

  const displayCalls = calls.filter((call) =>
    activeTab === "activity" ? !call.is_archived : call.is_archived
  );

  return (
    <div className="calls-container">
      <div className="tabs">
        <button onClick={() => setActiveTab("activity")}>All Calls</button>
        <button onClick={() => setActiveTab("archived")}>Archived</button>
      </div>

      <div className="actions">
        {activeTab === "activity" ? (
          <button onClick={archiveAll}>Archive All</button>
        ) : (
          <button onClick={unarchiveAll}>Unarchive All</button>
        )}
      </div>

      <div className="calls-list">
        {displayCalls.map((call) => (
          <div key={call.id} className="call-item" onClick={() => setSelectedCall(call)}>
            {getCallIcon(call)}
            <span>{call.direction}</span>
            <span>From: {call.from}</span>
            <span>To: {call.to}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleArchive(call.id);
              }}
            >
              {call.is_archived ? "Unarchive" : "Archive"}
            </button>
          </div>
        ))}
      </div>

      {selectedCall && (
        <div className="call-detail">
          <h3>Call Details</h3>
          <p>Direction: {selectedCall.direction}</p>
          <p>From: {selectedCall.from}</p>
          <p>To: {selectedCall.to}</p>
          <p>Duration: {selectedCall.duration}s</p>
          <p>Type: {selectedCall.call_type}</p>
          <p>Via: {selectedCall.via}</p>
          <p>Created: {new Date(selectedCall.created_at).toLocaleString()}</p>
          <button onClick={() => setSelectedCall(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Calls;
// import React from "react";

// // import { useState } from "react";
// import mockCalls from "../mockData.js";
// function Calls() {
//   // const [activeTab, setActiveTab] = useState("missed");
//   // const [displayCalls, setDisplayCalls] = useState([]);

//   const missedCalls = mockCalls.filter((call) => call.call_type === "missed");

//   return (
//     <div>
//       <span>
//         <button onClick={() => console.log(missedCalls)}>Missed Calls</button>
//         <button>All Calls</button>
//       </span>
//     </div>
//   );
// }
// export default Calls;
