import React from "react";
import IconContainer from "../molecules/IconContainer";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";
import Headshot from "../atoms/Headshot";
import {introHeader, introBody} from "../../assets/copy/landingPageCopy.js"
import { AllIconFiles } from "../../assets/files/IconFiles";
const TextHeader = styled.p`
  font-size: var(--smallMedium);
`;
const Wrapper = styled.div`
  padding-top: 60px;
  margin-bottom: 40px;
  display: flex;
`;

const Introduction = () => {
  return (
    <Wrapper className="container" id="portfolio">
      <div className="row">
      <Headshot />
      <div className="col-12 col-md-8">
        <TextHeader>{introHeader}</TextHeader>
        <Paragraph text={introBody} />
        <IconContainer selectedIcons={AllIconFiles}/>
      </div>
      </div>
    </Wrapper>
  );
};

export default Introduction;
