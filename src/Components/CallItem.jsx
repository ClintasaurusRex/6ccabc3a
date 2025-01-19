import React from "react";
import "./Styles/CallItem.css";

// call - Comes from the useApi hook
// onToggleArchive - Also from useApi hook, specifically the toggleArchive function
// getCallIcon - Comes from the useCallIcon hook

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#666666"
          >
            <path d="M479.79-192Q450-192 429-213.21t-21-51Q408-294 429.21-315t51-21Q510-336 531-314.79t21 51Q552-234 530.79-213t-51 21Zm0-216Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm0-216Q450-624 429-645.21t-21-51Q408-726 429.21-747t51-21Q510-768 531-746.79t21 51Q552-666 530.79-645t-51 21Z" />
          </svg>
          {/* <img
            src="public/emblems/more_vert_16dp_666666_FILL0_wght400_GRAD0_opsz20.svg"
            alt={call.is_archived ? "Unarchive" : "Archive"}
            className="archive-icon"
          /> */}
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
