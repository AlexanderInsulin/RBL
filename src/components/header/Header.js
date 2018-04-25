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

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${props =>
    props.start ? "flex-start" : props.center ? "center" : "flex-end"};
`;

const Header = () => (
  <div>
    <Wrapper>
      <Section start>a</Section>
      <Section center>b</Section>
      <Section end>c</Section>
    </Wrapper>
  </div>
);

export default Header;
