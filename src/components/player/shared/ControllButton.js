import React from "react";
import styled from "styled-components";

const ControllButton = ({ icon }) => (
  <Button>
    <Image src={icon} />
  </Button>
);

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #000000;
  outline: none;
`;

const Image = styled.img`
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

export default ControllButton;
