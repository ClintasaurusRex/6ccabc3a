import React from "react";
import mockCalls from "../mockData";
import CallLog from "./CallLog";

const AllCalls = () => {
  // No filtering, show all calls
  return (
    <div className="all-calls">
      <CallLog calls={mockCalls} title="All Calls" />
    </div>
  );
};

export default AllCalls;
