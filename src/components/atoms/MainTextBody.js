import React from 'react'
import styled from 'styled-components'

const TextFront = styled.p`
  position: relative;
  z-index: 42;
  opacity: 1;
  color: black;
  padding: none;
  margin: none;
  font-size: var(--medium)
`;


const MainTextBody = ({text}) => {
  return (
    <TextFront>{text}</TextFront>
  )
}

export default MainTextBody