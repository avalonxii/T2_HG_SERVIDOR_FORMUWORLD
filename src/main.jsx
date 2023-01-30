import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FormualrioContextProvider } from "./context/FormuContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormualrioContextProvider>
      <App />
    </FormualrioContextProvider>
  </React.StrictMode>
);
