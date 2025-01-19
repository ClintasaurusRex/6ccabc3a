import React from "react";
import ReactDOM from "react-dom";

// import mockCalls from "./mockData.js";
import Calls from "./Components/Calls.jsx";
import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";
// import CallItem from "./Components/CallItem.jsx";
import Buttons from "./Components/Buttons.jsx";
import { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("activity");
  return (
    <div className="container">
      <Header />
      {/* <Buttons activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      <main className="content">
        <CallLog />
      </main>

      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
