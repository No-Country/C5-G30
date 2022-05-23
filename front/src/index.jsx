import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Main from "./routes/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="/login" element="login"></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
