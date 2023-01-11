import React from 'react'
import styled from 'styled-components';

const Text = styled.p`
  font-size: var(--small);
  text-align: left;

`;
const Paragraph = ({text}) => {
  console.log("hello", text)
  return (

    <Text>{text}</Text>
  )
}

export default Paragraph