import React from "react";
import { useCallIcon } from "./hooks/useCallIcon";
import "./Styles/CallItem.css";

const CallItem = ({ calls = [], onArchive, onSelect }) => {
  const { getCallIcon } = useCallIcon();

  return (
    <div className="calls-container">
      <div className="calls-list">
        {calls.map((call) => (
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
            <div className="archive-button">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onArchive(call.id);
                }}
              >
                {call.is_archived ? "Unarchive" : "Archive"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CallItem;

// import { useEffect } from "react";

// const CallItem = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       console.log("Making API call...");
//       try {
//         const response = await fetch("https://aircall-api.onrender.com/activities");
//         const data = await response.json();
//         console.log("API Response:", data);
//       } catch (error) {
//         console.log("API Error:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Return a div instead of null to render something
//   return <div>Loading calls...</div>;
// };

// export default CallItem;

// const CallItem = ({ call, onArchive, onSelect }) => {
//   if (!call) return null;

//   return (
//     <div className="calls-container">
//       <div className="call-item" onClick={() => onSelect(call)}>
//         <div className="call-info">
//           <span className={`call-type ${call.call_type}`}>{call.call_type.toUpperCase()}</span>
//           <span className="call-direction">{call.direction}</span>
//           <span className="call-number">From: {call.from}</span>
//           <span className="call-number">To: {call.to}</span>
//           <span className="call-duration">Duration: {call.duration}s</span>
//         </div>
//         <button
//           className="archive-button"
//           onClick={(e) => {
//             e.stopPropagation();
//             onArchive(call.id);
//           }}
//         >
//           {call.is_archived ? "Unarchive" : "Archive"}
//         </button>
//       </div>
//     </div>
//   );
// };

// return (
//   <div className="calls-container">
//     <div className="call-item" onClick={() => onSelect(call)}>
//       <div className="call-info">
//         <span className={`call-type ${call.call_type}`}>{call.call_type.toUpperCase()}</span>
//         <span className="call-direction">{call.direction}</span>
//         <span className="call-number">From: {call.from}</span>
//         <span className="call-number">To: {call.to}</span>
//         <span className="call-duration">Duration: {call.duration}s</span>
//       </div>
//       <button
//         className="archive-button"
//         onClick={(e) => {
//           e.stopPropagation();
//           onArchive(call.id);
//         }}
//       >
//         {call.is_archived ? "Unarchive" : "Archive"}
//       </button>
//     </div>
//   </div>
// );
// };
/* <div className="calls-list"> */
// {displayCalls.map((call) => (
//   <div key={call.id} className="call-log-item">
//     <div className="call-icon-wrapper">{getCallIcon(call)}</div>
//     <div className="call-details">
//       <div className="number">+{call.from}</div>
//       <div className="details">tried to call on {call.to}</div>
//     </div>
//     <div className="time">
//       {new Date(call.created_at).toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       })}
//     </div>
//     <div className="archive-button">
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           toggleArchive(call.id);
//         }}
//       >
//         {call.is_archived ? "Unarchive" : "Archive"}
//       </button>
//     </div>
//   </div>
// ))}
// </div>
// </div>
