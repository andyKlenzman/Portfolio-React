import React from 'react'
import styled from "styled-components";
import { useRef } from 'react';
const Button = styled.button`
  height: 50px;
  color: white;
  border: white solid 2px;
  width: 150px;
  text-align: center;
  margin-top: 15px;
  align-self: center;
  background-color: transparent;
  transition: .7s;


  &:hover {
    background-color: var(--primaryColor);
    border: none;
  }`


const Text = styled.p`
  font-size: var(--small);
  text-transform: uppercase;
  margin-top:10px;
  letter-spacing: .003rem

`;

const BigButtonTransparent = ({text}) => {
  
  const handleClickScroll = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Button onClick={handleClickScroll}>
        <Text>{text}</Text>
    </Button>
  )
}

export default BigButtonTransparent