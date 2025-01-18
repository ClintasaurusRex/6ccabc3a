import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";
import Tabs from "./Components/Tabs.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="container-view">Some activities should be here</div>
      <main className="content">
        <Tabs />
        <CallLog />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
// import React from "react";
// import mockCalls from "../mockData";
// import CallLog from "./CallLog";

// const AllCalls = () => {
//   // No filtering, show all calls
//   return (
//     <div className="all-calls">
//       <CallLog calls={mockCalls} title="All Calls" />
//     </div>
//   );
// };

// export default AllCalls;

// import mockCalls from "../mockData";
// import CallLog from "./CallLog";

// const Inbox = () => {
//   const inboxCalls = mockCalls.filter(
//     (call) => call.direction === "inbound" || call.call_type === "missed"
//   );

//   return (
//     <div className="inbox">
//       <CallLog calls={inboxCalls} title="Inbox" />
//     </div>
//   );
// };
// export default Inbox;

// import React, { useState } from "react";
// import Inbox from "src/Components/AllCalls.jsx";
// import AllCalls from "src/Components/Inbox.jsx";

// const Header = () => {
//   const [activeTab, setActiveTab] = useState("inbox");

//   return (
//     <div>
//       <header className="header2">
//         <div className="tabs">
//           <button
//             className={`tab ${activeTab === "inbox" ? "active" : ""}`}
//             onClick={() => setActiveTab("inbox")}
//           >
//             Inbox
//           </button>
//           <button
//             className={`tab ${activeTab === "allCalls" ? "active" : ""}`}
//             onClick={() => setActiveTab("allCalls")}
//           >
//             All Calls
//           </button>
//         </div>
//       </header>
//       {activeTab === "inbox" ? <Inbox /> : <AllCalls />}
//     </div>
//   );
// };

// export default Header;
