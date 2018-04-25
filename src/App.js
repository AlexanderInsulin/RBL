// @flow
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";
import { Header } from "./components";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={MainPage} />
    </div>
  </Router>
);

export default App;
