import React, { useState } from "react";
import useApi from "./hooks/useApi";
import { useCallIcon } from "./hooks/useCallIcon";
import { useGrouped } from "./hooks/useGrouped";
import TabBar from "./TabBar.jsx";
import CallGroup from "./CallGroup.jsx";
import "./Styles/CallLog.css";

const CallLog = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const { getCallIcon } = useCallIcon();
  const { calls, loading, error, toggleArchive, archiveAll, unarchiveAll } = useApi();
  const groupedCalls = useGrouped(calls, activeTab);

  if (loading) return <div className="loading">Loading calls...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="call-log">
      <TabBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onArchiveAll={archiveAll}
        onUnarchiveAll={unarchiveAll}
      />

      {Object.entries(groupedCalls).map(([date, calls]) => (
        <CallGroup
          key={date}
          date={date}
          calls={calls}
          onToggleArchive={toggleArchive}
          getCallIcon={getCallIcon}
        />
      ))}
    </div>
  );
};

export default CallLog;
