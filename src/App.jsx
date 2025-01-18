import React from "react";
import ReactDOM from "react-dom";

// import mockCalls from "./mockData.js";
import Calls from "./Components/Calls.jsx";
import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";
import CallItem from "./Components/CallItem.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Calls />
      <div className="container-view">Some activities should be here</div>
      <main className="content">
        <CallLog />
        <CallItem />
      </main>
      <Footer />
      {/* <footer className="footer-container">
        <Footer />
      </footer> */}
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
