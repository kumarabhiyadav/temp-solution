import React from "react";
import logo from "./logo.svg";
import BillPage from "./components/BillsModule/BillPage";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h4 style={{ textAlign: "center" }}>Vishal Roadlines</h4>

          <BillPage />
        </div>
      </div>
    </>
  );
}

export default App;
