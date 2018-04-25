// @flow
import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import Search from "./search";

const Header = () => (
  <div>
    <Wrapper>
      <Section start="true">
        <Logo src={LogoImage} alt="RBL logo" />
        <Search />
      </Section>
      <Section center="true">b</Section>
      <Section end="true">c</Section>
    </Wrapper>
  </div>
);

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

const Logo = styled.img`
  width: 106px;
  height: 39px;
  object-fit: contain;
  margin-left: 20px;
`;

export default Header;
