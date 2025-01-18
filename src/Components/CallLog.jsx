import React from "react";
import mockCalls from "../mockData";
import "./Styles/CallLog.css";
import { FaPhoneVolume, FaPhone, FaPhoneSlash } from "react-icons/fa";

const CallLog = () => {
  const getCallIcon = (call) => {
    if (call.call_type === "missed") {
      return <FaPhoneSlash className="missed-call-icon" />;
    }
    return call.direction === "inbound" ? (
      <FaPhone className="inbound-call-icon" />
    ) : (
      <FaPhoneVolume className="outbound-call-icon" />
    );
  };

  return (
    <div className="call-log">
      <h1>Activity</h1>
      {mockCalls.map((call) => (
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
        </div>
      ))}
    </div>
  );
};

export default CallLog;
