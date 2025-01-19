import React from "react";
import "./Styles/CallItem.css";

const CallItem = ({ call, onToggleArchive, getCallIcon }) => {
  return (
    <div className="call-log-item">
      <div className="call-icon-wrapper">{getCallIcon(call)}</div>
      <div className="call-details">
        <div className="number">+{call.from}</div>
        <div className="details">tried to call on {call.to}</div>
      </div>
      <div className="archive-button">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleArchive(call.id);
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
  );
};

export default CallItem;
