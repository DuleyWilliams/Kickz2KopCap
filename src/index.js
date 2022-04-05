import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Kickz2Kop } from "./components/Kickz2Kop.js";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kickz2Kop />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
