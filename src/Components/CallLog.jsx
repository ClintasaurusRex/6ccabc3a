import React from "react";
import "./Styles/CallLog.css";
import { FaArchive } from "react-icons/fa";
import useApi from "./hooks/useApi";
import { useGroupedCalls } from "./hooks/useGroupedCalls";
import { useCallIcon } from "./hooks/useCallIcon";

const CallLog = ({ showArchived = false }) => {
  const { calls, loading, error, archiveCall } = useApi();
  const filteredCalls = calls.filter((call) => call.is_archived === showArchived);
  // console.log("Filtered Calls:", filteredCalls);
  const groupedCalls = useGroupedCalls(filteredCalls);
  // console.log("Grouped Calls:", groupedCalls);
  const { getCallIcon } = useCallIcon();

  const handleArchive = async (callId, currentArchiveState) => {
    await archiveCall(callId, !currentArchiveState);
  };

  if (loading) return <div>Loading calls...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="call-log">
      {Object.keys(groupedCalls).map((date) => (
        <div key={date}>
          <h2 className="date-separator">{date}</h2>
          {groupedCalls[date].map((call) => (
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
              <button
                className="archive-button"
                onClick={() => handleArchive(call.id, call.is_archived)}
              >
                <FaArchive /> {call.is_archived ? "Unarchive" : "Archive"}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

// const CallLog = () => {
//   // Group calls by date
//   const groupedCalls = mockCalls
//     .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//     .reduce((acc, call) => {
//       const date = new Date(call.created_at).toLocaleDateString([], {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       });
//       if (!acc[date]) {
//         acc[date] = [];
//       }
//       acc[date].push(call);
//       return acc;
//     }, {});

//   // Get the correct call icon
//   const getCallIcon = (call) => {
//     if (call.call_type === "missed") {
//       return <FaPhoneSlash className="missed-call-icon" />;
//     }
//     return call.direction === "inbound" ? (
//       <FaPhone className="inbound-call-icon" />
//     ) : (
//       <FaPhoneVolume className="outbound-call-icon" />
//     );
//   };

//   return (
//     <div className="call-log">
//       {Object.keys(groupedCalls).map((date) => (
//         <div key={date}>
//           <h2 className="date-separator">{date}</h2>
//           {groupedCalls[date].map((call) => (
//             <div key={call.id} className="call-log-item">
//               <div className="call-icon-wrapper">{getCallIcon(call)}</div>
//               <div className="call-details">
//                 <div className="number">+{call.from}</div>
//                 <div className="details">tried to call on {call.to}</div>
//               </div>
//               <div className="time">
//                 {new Date(call.created_at).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

export default CallLog;

// import React from "react";
// // import mockCalls from "../mockData";
// import "./Styles/CallLog.css";
// import { FaPhoneVolume, FaPhone, FaPhoneSlash } from "react-icons/fa";
// import useApi from "./hooks/useApi";
// import { useGroupedCalls } from "./hooks/useGroupedCalls";
// import { useCallIcon } from "./hooks/useCallIcon";

// const CallLog = () => {
//   const { calls, loading, error } = useApi();
//   const groupedCalls = useGroupedCalls(calls);
//   const { getCallIcon } = useCallIcon();

//   if (loading) return <div>Loading calls...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="call-log">
//       {Object.keys(groupedCalls).map((date) => (
//         <div key={date}>
//           <h2 className="date-separator">{date}</h2>
//           {groupedCalls[date].map((call) => (
//             <div key={call.id} className="call-log-item">
//               <div className="call-icon-wrapper">{getCallIcon(call)}</div>
//               <div className="call-details">
//                 <div className="number">+{call.from}</div>
//                 <div className="details">tried to call on {call.to}</div>
//               </div>
//               <div className="time">
//                 {new Date(call.created_at).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };
