import React from "react";
import AnimationSmall from "../atoms/AnimationSmall";
import SecondaryText from "../atoms/SecondaryText";
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
const ProjectBanner = ({ primaryText, secondaryText, projectLink}) => {
  return (
    <div>
      <AnimationSmall  />
      <Wrapper>
        <MainText text={primaryText} />
        <SecondaryText text={secondaryText} />
        <BigButton text="View Project" projectLink={projectLink}/>
      </Wrapper>
    </div>
  );
};

export default ProjectBanner;
