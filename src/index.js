import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import App from "./App";

const AppWithRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/context" exact component={App} />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>,
  document.getElementById("root")
);
