import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import TaskContextProvider from "./context/TaskContext/TaskContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <TaskContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </TaskContextProvider>,
  document.getElementById("root")
);
