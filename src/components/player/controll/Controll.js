// @flow
import React from "react";
import styled from "styled-components";
import { ControllButton } from "../shared";

import prev from "../../../assets/player/previous-hover.svg";
import pause from "../../../assets/player/pause.svg";
import next from "../../../assets/player/next-hover.svg";

const Controll = () => (
  <Wrapper>
    <ControllButton icon={prev} />
    <ControllButton icon={pause} />
    <ControllButton icon={next} />
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 44px;
`;

export default Controll;
