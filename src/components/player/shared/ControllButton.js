import React from "react";
import styled from "styled-components";

const ControllButton = ({ icon }) => (
  <Button>
    <img src={icon} />
  </Button>
);

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #000000;
  outline: none;
`;

export default ControllButton;
