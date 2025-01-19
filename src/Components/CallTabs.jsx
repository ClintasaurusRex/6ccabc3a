import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CallLog from "./CallLog";
import "./Styles/CallTabs.css";

const CallTabs = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="call-tabs">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "active" ? "active" : ""}`}
          onClick={() => setActiveTab("active")}
        >
          Activity Feed
        </button>
        <button
          className={`tab-button ${activeTab === "archived" ? "active" : ""}`}
          onClick={() => setActiveTab("archived")}
        >
          Archived
        </button>
      </div>
      <TransitionGroup>
        <CSSTransition key={activeTab} timeout={300} classNames="tab">
          <CallLog showArchived={activeTab === "archived"} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default CallTabs;

// const CallTabs = () => {
//   const [activeTab, setActiveTab] = useState("active");

//   return (
//     <div className="call-tabs">
//       <div className="tab-buttons">
//         <button
//           className={`tab-button ${activeTab === "active" ? "active" : ""}`}
//           onClick={() => setActiveTab("active")}
//         >
//           Activity Feed
//         </button>
//         <button
//           className={`tab-button ${activeTab === "archived" ? "active" : ""}`}
//           onClick={() => setActiveTab("archived")}
//         >
//           Archived
//         </button>
//       </div>
//       <CallLog showArchived={activeTab === "archived"} />
//     </div>
//   );
// };
