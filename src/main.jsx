import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppData } from "./components/context.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppData>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppData>,
);
