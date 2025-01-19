import React, { useState } from "react";
import "./Styles/CallLog.css";

import useApi from "./hooks/useApi";
import TabBar from "./TabBar.jsx";
import CallGroup from "./CallGroup.jsx";
import { useCallIcon } from "./hooks/useCallIcon";
import { useGrouped } from "./hooks/useGrouped";

const CallLog = () => {
  const [activeTab, setActiveTab] = useState("activity");
  const { getCallIcon } = useCallIcon();
  const { calls, loading, error, toggleArchive, archiveAll, unarchiveAll, missedCallsCount } =
    useApi();
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
        missedCallsCount={missedCallsCount}
      />
      {Object.keys(groupedCalls).length === 0 ? (
        <div className="empty-state">No calls to display</div>
      ) : (
        Object.entries(groupedCalls).map(([date, calls]) => (
          <CallGroup
            key={date}
            date={date}
            calls={calls}
            onToggleArchive={toggleArchive}
            getCallIcon={getCallIcon}
          />
        ))
      )}
    </div>
  );
};
export default CallLog;
