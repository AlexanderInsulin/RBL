// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  seconds: number
};

const Time = (props: Props) => (
  <Wrapper>
    {getMinutes(props.seconds)}:{getSeconds(props.seconds)}
  </Wrapper>
);

const getMinutes = seconds => Math.floor(seconds / 60);

const getSeconds = seconds => seconds % 60;

const Wrapper = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
`;

export default Time;
