// @flow
import React from "react";
import styled from "styled-components";
import { ControllButton } from "../shared";
import speaker from "../../../assets/player/speaker.svg";

const AudioControll = () => (
  <Wrapper>
    <ControllButton icon={speaker} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 24px;
  margin-right: 84px;
`;

export default AudioControll;
