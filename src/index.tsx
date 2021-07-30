import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ImagesContextProvider } from "./images/ImagesContext";
import { SearchContextProvider } from "./search/SearchContext";
import { LoaderContextProvider } from "./loader/LoaderContext";
import { ThemeContextProvider } from "./theme/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <SearchContextProvider>
        <ImagesContextProvider>
          <LoaderContextProvider>
            <App />
          </LoaderContextProvider>
        </ImagesContextProvider>
      </SearchContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
