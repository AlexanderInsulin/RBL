import React from "react";
import styled from "styled-components";
import Artist from "./Artist";

const Section = () => (
  <Container>
    <Wrapper>
      <Title>Popular artists</Title>
      <Row>
        <Artist
          img="https://cdn.zeplin.io/5ac37a0d0f240ab10d372469/assets/2EDC2C7B-A864-4C59-9EDA-78C1DA0E63D4.png"
          name="Luke Kelly"
        />
        <Artist
          img="https://cdn.zeplin.io/5ac37a0d0f240ab10d372469/assets/2EDC2C7B-A864-4C59-9EDA-78C1DA0E63D4.png"
          name="Luke Kelly"
        />
        <Artist
          img="https://cdn.zeplin.io/5ac37a0d0f240ab10d372469/assets/2EDC2C7B-A864-4C59-9EDA-78C1DA0E63D4.png"
          name="Luke Kelly"
        />
        <Artist
          img="https://cdn.zeplin.io/5ac37a0d0f240ab10d372469/assets/2EDC2C7B-A864-4C59-9EDA-78C1DA0E63D4.png"
          name="Luke Kelly"
        />
        <Artist
          img="https://cdn.zeplin.io/5ac37a0d0f240ab10d372469/assets/2EDC2C7B-A864-4C59-9EDA-78C1DA0E63D4.png"
          name="Luke Kelly"
        />
      </Row>
    </Wrapper>
  </Container>
);

const Container = styled.div`
  padding: 1%;
  margin-left: 8%;
  margin-right: 8%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: bold;
  color: #000000;
  margin-left: 1%;
`;

export default Section;
