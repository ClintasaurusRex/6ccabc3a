import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import CallLog from "./Components/CallLog.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <main className="content">
        <CallLog />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
