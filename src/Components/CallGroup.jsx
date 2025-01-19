import React from "react";
import CallItem from "./CallItem";

const CallGroup = ({ date, calls, onToggleArchive, getCallIcon }) => {
  return (
    <div>
      <h2 className="date-separator">{date}</h2>
      {calls.map((call) => (
        <CallItem
          key={call.id}
          call={call}
          onToggleArchive={onToggleArchive}
          getCallIcon={getCallIcon}
        />
      ))}
    </div>
  );
};

export default CallGroup;
