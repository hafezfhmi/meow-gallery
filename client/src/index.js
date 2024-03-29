import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/userContext";
import App from "./App";
import "./styles/reset.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
