// @flow
import React from "react";
import styled from "styled-components";
import { Section } from "../shared";
import Controll from "./controll";
import SongInfo from "./songInfo";
import TimeControll from "./timeControll";

type Props = {
  open: Boolean
};

const Player = (props: Props) => (
  <div>
    {props.open ? (
      <Wrapper>
        <Section start>
          <Controll />
          <SongInfo artist="asd" track="asd" />
        </Section>
        <Section end>
          <TimeControll />
        </Section>
      </Wrapper>
    ) : null}
  </div>
);

const Wrapper = styled.footer`
  height: 88px;
  width: 100%;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  background-color: #000000;
`;

export default Player;
