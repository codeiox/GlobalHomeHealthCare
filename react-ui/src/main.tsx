import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure the correct path to App
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS for styling

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
