import React from "react";
import AnimationSmall from "../atoms/AnimationSmall";
import SecondaryText from "../atoms/SecondaryText";
import MainTextSmall from "../atoms/MainTextSmall";
import styled from "styled-components";
import MainText from "../atoms/MainText";
import BigButton from "../atoms/BigButton";

const Wrapper = styled.div`
  height: 50vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const ProjectBanner = ({ primaryText, secondaryText, projectLink, isButton, backgroundColor }) => {
  return (
    <div>
      <AnimationSmall  />
      <Wrapper>
        <MainText text={primaryText} />
        <SecondaryText text={secondaryText} />
        {isButton ? <BigButton text="View Project" projectLink={projectLink}/> : null}
      </Wrapper>
    </div>
  );
};

export default ProjectBanner;
