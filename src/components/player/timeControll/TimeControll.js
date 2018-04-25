// @flow
import React from "react";
import styled from "styled-components";
import DuractionIndicator from "./DurationIndicator";
import Time from "./Time";

const TimeControll = () => (
  <Wrapper>
    <Time seconds={30} />
    <DuractionIndicator past={30} whole={100} />
    <Time seconds={100} />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export default TimeControll;
