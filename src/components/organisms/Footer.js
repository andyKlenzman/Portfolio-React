import React from "react";
import AnimationSmall from "../atoms/AnimationSmall";
import styled from "styled-components";
import SecondaryText from "../atoms/SecondaryText";
import MainTextSmall from "../atoms/MainTextSmall";

const Wrapper = styled.div`
  height: 50vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
`;

const Footer = () => {
  return (
    <div>
      <AnimationSmall size={2} />
      <Wrapper>
        <MainTextSmall text="Let's build something cool!" />
        <div style={{height:"5px"}}></div>
        <a style={{textDecorationColor:"#e854e6"}} href="mailto: andyklenz@gmail.com" >
          <SecondaryText text="andyklenz@gmail.com"  />
        </a>
      </Wrapper>
    </div>
  );
};

export default Footer;
