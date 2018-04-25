import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background-color: #ffffff;
`;

const Header = () => (
  <div>
    <Wrapper />
  </div>
);

export default Header;
