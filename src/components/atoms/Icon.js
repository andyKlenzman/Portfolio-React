import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  

  text-transform: uppercase;
`;
const Text = styled.p`
  font-size: var(--extraSmall);
  bottom: 0;
  text-transform: capitalize;
  

`;

const Img = styled.img`
  margin: 8px;
  height: 50px;
`;

const Icon = ({icon, text}) => {
  return (
    <div className="">
      <Img src={icon} alt="icon"></Img>
      <Text>{text}</Text>
    </div>
  );
};

export default Icon;
