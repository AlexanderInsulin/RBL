// @flow
import React from "react";
import styled from "styled-components";
import { Link } from "../shared";

const Auth = () => (
  <Wrapper>
    <Link to="/">Log In</Link>
    <Separator>or</Separator>
    <Link to="/">Register</Link>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-right: 4px;
`;

const Separator = styled.span`
  opacity: 0.3;
  font-size: 14px;
  font-weight: 600;
  color: #000000;
`;

export default Auth;
