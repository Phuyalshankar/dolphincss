import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import '../../dolphin-css/App.css'; // <-- main DolphinCSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
