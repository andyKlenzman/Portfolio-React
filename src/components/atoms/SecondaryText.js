import React from "react";
import styled from "styled-components";

const Text = styled.p`
  opacity: 1;
  color: white;
  padding: none;
  margin: -5px;
  font-size: var(--smallMedium);
`;
const SecondaryText = ({ text }) => {
  return <Text>{text}</Text>;
};

export default SecondaryText;
