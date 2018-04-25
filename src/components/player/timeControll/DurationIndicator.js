// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  past: number,
  whole: number
};

const DuractionIndicator = (props: Props) => (
  <Wrapper>
    <Indicator width={props.past / (props.whole / 100)} />
    <IndicatorBack />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
  width: 60%,
  height: 2px;
`;

const Indicator = styled.div`
  position: absolute;
  height: 2px;
  background-color: #ffffff;
  width: ${props => props.width}%;
`;

const IndicatorBack = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  opacity: 0.2;
  background-color: #ffffff;
`;

export default DuractionIndicator;
