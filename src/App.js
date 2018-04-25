// @flow
import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";
import { Header, Player } from "./components";

const App = () => (
  <Router>
    <div>
      <Header />
      <Wrapper>
        <Route exact path="/" component={MainPage} />
      </Wrapper>
      <Player open />
    </div>
  </Router>
);

const Wrapper = styled.div`
  padding-top: 180px;
  padding-bottom: 180px;
`;

export default App;
