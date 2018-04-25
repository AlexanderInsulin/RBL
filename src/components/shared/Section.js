import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${props =>
    props.start ? "flex-start" : props.center ? "center" : "flex-end"};
`;

export default Section;
