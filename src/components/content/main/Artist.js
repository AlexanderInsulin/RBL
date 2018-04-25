// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  img: string,
  name: string
};

const Artist = (props: Props) => (
  <Wrapper>
    <Image src={props.img} />
    <Label>{props.name}</Label>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 24px;
`;

const Label = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 0;
`;

export default Artist;
