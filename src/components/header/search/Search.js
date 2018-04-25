// @flow
import React from "react";
import styled from "styled-components";

const Search = () => (
  <Wrapper>
    <Input placeholder="SEARCH" />
  </Wrapper>
);

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-content: center;
  margin-left: 54px;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 16px;
  background-color: #fafafa;
  border: none;
  padding-left: 48px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  &::placeholder {
    color: #9a9a9a;
  }
`;

export default Search;
