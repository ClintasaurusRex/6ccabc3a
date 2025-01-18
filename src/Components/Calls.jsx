import React from "react";
import ReactDOM from "react-dom";

import mockCalls from "../mockData.js";
function Calls() {
  const missedCalls = mockCalls.filter((call) => call.call_type === "missed");

  return (
    <div>
      <span>
        <button onClick={() => console.log(missedCalls)}>Missed Calls</button>
        <button>All Calls</button>
      </span>
    </div>
  );
}
export default Calls;
