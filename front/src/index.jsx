import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./components/List/List";
import LogInRegister from "./components/LogRegister/LogInRegister";
import "./index.css";
import Main from "./routes/main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ height: "100vh", width: "100%" }}>
      <Router>
        <Routes>
          <Route path="" element={<Main />}></Route>
          <Route
            path="/login"
            element={<LogInRegister isLogin={true} />}
          ></Route>
          <Route
            path="/register"
            element={<LogInRegister isLogin={false} />}
          ></Route>
          <Route path="/list" element={<List />}></Route>
          <Route
            path="*"
            element={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h1>Error 404</h1>
                <h3>Pagina no encontrada</h3>
              </div>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
