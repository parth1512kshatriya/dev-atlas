import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

import "./index.css";

import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <HelmetProvider>

      <SearchProvider>
        <App />
      </SearchProvider>

    </HelmetProvider>

  </React.StrictMode>

);