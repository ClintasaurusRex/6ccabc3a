import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="container-view">Some activities should be here</div>
      <main>
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
