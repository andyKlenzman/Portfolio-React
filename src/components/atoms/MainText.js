import React from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  height: fit-content;
  margin: none;
  padding: none;
  margin-bottom: -15px;
`;

const TextFront = styled.p`
  position: relative;
  z-index: 42;
  opacity: 1;
  color: white;
  padding: none;
  margin: none;
  font-size: var(--large)
`;

const TextBack = styled.p`
  padding: 0px;
  position: absolute;
  z-index: 4;
  opacity: 1;
  color: #e854e6;
  width: 100%;
  left: -4px;
  top: 4px;
  padding: none;
  margin: none;
  
  font-size: var(--large)
`;

const MainText = ({ text, large }) => {
  return (
    <Wrapper>
      <TextFront>{text}</TextFront>
      <TextBack>{text}</TextBack>
    </Wrapper>
  );
};

export default MainText;
