// @flow
import React from "react";
import styled from "styled-components";

import prev from "../../../assets/player/previous-hover.svg";
import pause from "../../../assets/player/pause.svg";
import next from "../../../assets/player/next-hover.svg";

const Controll = () => (
  <Wrapper>
    <Button>
      <img src={prev} />
    </Button>
    <Button>
      <img src={pause} />
    </Button>
    <Button>
      <img src={next} />
    </Button>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-left: 44px;
`;

const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background-color: #000000;
  outline: none;
`;

export default Controll;
