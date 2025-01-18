import React from "react";

const CallItem = ({ call }) => {
  return (
    <div className="call-item">
      <div className="call-details">
        <span className={`call-icon ${call.direction}`}></span>
        <div>
          <p className="call-from">
            {call.from} tried to call {call.to}
          </p>
          <p className="call-time">
            {new Date(call.created_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallItem;
