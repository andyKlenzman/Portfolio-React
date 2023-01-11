import React from "react";
import Animation from "../atoms/Animation";
import styled from "styled-components";
import BigButtonTransparent from "../atoms/BigButtonTransparent";
import MainText from "../atoms/MainText";
import SecondaryText from "../atoms/SecondaryText";
import BigButton from "../atoms/BigButton";

const Wrapper = styled.div`
  height: 100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;

  text-transform: uppercase;
`;

const Banner = ({ primaryText, secondaryText, isMainButton, buttonText }) => {
  return (
    <div>
      <Animation size={1} />
      <Wrapper>
        <MainText text={primaryText} />
        <SecondaryText text={secondaryText} />
        {isMainButton ? (
          <BigButtonTransparent text={buttonText} />
        ) : (
          <BigButton />
        )}
      </Wrapper>
    </div>
  );
};

export default Banner;
