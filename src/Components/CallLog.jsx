import React from "react";
import mockCalls from "../mockData";
import "./Styles/CallLog.css";

const CallLog = () => {
  return (
    <div className="call-log">
      <h1>Activity</h1>
      {mockCalls.map((call) => (
        <div key={call.id} className="call-log-item">
          <span
            className={`call-icon ${call.direction}-call ${
              call.call_type === "missed" ? "missed-call" : ""
            }`}
          />
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
        </div>
      ))}
    </div>
  );
};

export default CallLog;
