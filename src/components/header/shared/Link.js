import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const Link = styled(RouterLink)`
  font-size: 14px;
  font-weight: bold;
  margin-left: 16px;
  margin-right: 16px;
  color: #000000;
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
`;

export default Link;
