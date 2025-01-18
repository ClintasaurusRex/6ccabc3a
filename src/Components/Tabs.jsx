import { useState } from "react";
import mockCalls from "../mockData.js";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("inbox");

  // Using Array.prototype.filter directly on mockCalls array
  const missedCalls = mockCalls.filter((call) => call.call_type === "missed");

  return (
    <div>
      <header>
        <button
          onClick={() => setActiveTab("inbox")}
          className={activeTab === "inbox" ? "active" : ""}
        >
          Inbox ({missedCalls.length})
        </button>
        <button onClick={() => setActiveTab("all")} className={activeTab === "all" ? "active" : ""}>
          All Calls ({mockCalls.length})
        </button>
      </header>

      <div className="tab-content">
        {activeTab === "inbox" ? <Inbox calls={missedCalls} /> : <AllCalls calls={mockCalls} />}
      </div>
    </div>
  );
};

const Inbox = ({ calls }) => {
  return (
    <div>
      {calls.map((call) => (
        <div key={call.id} className="call-item">
          <p>From: {call.from}</p>
          <p>To: {call.to}</p>
          <p>Duration: {call.duration}s</p>
          <p>Type: {call.call_type}</p>
        </div>
      ))}
    </div>
  );
};

const AllCalls = ({ calls }) => {
  return (
    <div>
      {calls.map((call) => (
        <div key={call.id} className="call-item">
          <p>From: {call.from}</p>
          <p>To: {call.to}</p>
          <p>Duration: {call.duration}s</p>
          <p>Type: {call.call_type}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
