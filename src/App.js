// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";

const App = () => (
  <Router>
    <Route exact path="/" component={MainPage} />
  </Router>
);

export default App;
