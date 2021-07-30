import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ImagesContextProvider } from "./images/ImagesContext";
import { SearchContextProvider } from "./search/SearchContext";

ReactDOM.render(
  <React.StrictMode>
    <SearchContextProvider>
      <ImagesContextProvider>
        <App />
      </ImagesContextProvider>
    </SearchContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
