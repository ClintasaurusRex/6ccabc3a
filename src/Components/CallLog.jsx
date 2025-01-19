import React, { useState, useEffect } from "react";
import "./Styles/CallLog.css";
import { FaArchive } from "react-icons/fa";
import { useCallIcon } from "./hooks/useCallIcon";

const CallLog = () => {
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

  const displayCalls = calls.filter((call) => {
    const filtered = activeTab === "activity" ? !call.is_archived : call.is_archived;
    return filtered;
  });
  const groupedCalls = displayCalls.reduce((acc, call) => {
    const date = new Date(call.created_at).toLocaleDateString([], {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(call);
    return acc;
  }, {});

  return (
    <div className="call-log">
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
              <div className="time">
                {new Date(call.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
              <div className="archive-button">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleArchive(call.id);
                  }}
                >
                  {call.is_archived ? "Unarchive" : "Archive"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CallLog;
