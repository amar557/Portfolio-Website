import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppData } from "./components/context";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppData>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppData>
  </React.StrictMode>,
);
