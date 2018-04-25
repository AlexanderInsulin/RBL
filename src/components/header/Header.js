// @flow
import React from "react";
import styled from "styled-components";
import LogoImage from "../../assets/header/logo.png";
import Search from "./search";
import Navigation from "./navigation";
import Auth from "./auth";
import { Section } from "../shared";

const Header = () => (
  <div>
    <Wrapper>
      <Section start="true">
        <Logo src={LogoImage} alt="RBL logo" />
        <Search />
      </Section>
      <Section center="true">
        <Navigation />
      </Section>
      <Section end="true">
        <Auth />
      </Section>
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

const Logo = styled.img`
  width: 106px;
  height: 39px;
  object-fit: contain;
  margin-left: 20px;
`;

export default Header;
