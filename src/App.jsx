import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";
import Header2 from "./Components/Header2.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="container-view">Some activities should be here</div>
      <main className="content">
        <CallLog />
        <Header2 />
      </main>
      <footer className="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
