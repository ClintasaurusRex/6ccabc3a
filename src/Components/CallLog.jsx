import React from "react";
import mockCalls from "../mockData";

const CallLog = () => {
  return (
    <div>
      <h1>Call Log</h1>
      {mockCalls.map((call) => (
        <div key={call.id} className="call-item">
          <p>Direction: {call.direction}</p>
          <p>From: {call.from}</p>
          <p>To: {call.to}</p>
          <p>Duration: {call.duration} seconds</p>
          <p>Type: {call.call_type}</p>
          <p>Archived: {call.is_archived ? "Yes" : "No"}</p>
          <p>Date: {new Date(call.created_at).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default CallLog;
