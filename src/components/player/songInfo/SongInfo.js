// @flow
import React from "react";
import styled from "styled-components";

type Props = {
  track: string,
  artist: string
};

const SongInfo = (props: Props) => (
  <Wrapper>
    <Track>{props.track}</Track>
    <Artist>{props.artist}</Artist>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const Track = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
`;

const Artist = styled.div`
  opacity: 0.4;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
`;

export default SongInfo;
