import mockCalls from "../mockData";
import CallLog from "./CallLog";

const Inbox = () => {
  const inboxCalls = mockCalls.filter(
    (call) => call.direction === "inbound" || call.call_type === "missed"
  );

  return (
    <div className="inbox">
      <CallLog calls={inboxCalls} title="Inbox" />
    </div>
  );
};
export default Inbox;
