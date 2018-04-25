// @flow
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";
import { Header, Player } from "./components";

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={MainPage} />
      <Player open />
    </div>
  </Router>
);

export default App;
