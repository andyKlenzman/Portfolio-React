import React from "react";
import dw from "../../assets/imgs/dw/dw.png";
import SecondaryText from "./SecondaryText";
import styled from "styled-components";
import MainTextSmall from "./MainTextSmall";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useNavigate } from "react-router";

const BackgroundContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.562);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  text-align: center;
  display: block;
`;

const BackgroundTextContainer = styled.p`
  margin-top: 40px;
  padding: 15px;
`;

const ForegroundBanner = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  text-transform: uppercase;
  padding: none;
  text-align: left;
  position: absolute;
  bottom: 10%;
  overflow: hidden;
  height: 45px;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
`;

const ForegroundSelectionBanner = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const ProjectCard = ({ img, primaryText, secondaryText,id }) => {
  const [isBooped, setIsBooped] = useState(false);
  const navigate = useNavigate()

  const propsForeground = useSpring({
    width: isBooped ? `0%` : "100%",
    paddingLeft: isBooped ? "0px" : "15px",
  });
  const propsBackground = useSpring({
    opacity: isBooped ? "1" : "0",
  });
  const trigger = () => {
    isBooped ? setIsBooped(false) : setIsBooped(true);
  };
  return (
    <div className="col-lg-6 col-12" onClick={()=> navigate(`project/${id}`)}>
      <div className="card border-0 shadow" >
        <div className="relative">
          <img className="card-img" src={img} alt="software project" />
        </div>
        <BackgroundContainer
          as={animated.div}
          style={propsBackground}
          config={{ mass: 1, tension: 500, friction: 0, clamp: true }}
        >
          <BackgroundTextContainer class="lg_text_banner">
            <MainTextSmall text={primaryText} />
            <SecondaryText text={secondaryText} />
          </BackgroundTextContainer>
        </BackgroundContainer>
        <ForegroundSelectionBanner
          onMouseEnter={trigger}
          onMouseLeave={trigger}
        >
          <ForegroundBanner as={animated.div} style={propsForeground}>
            <MainTextSmall text={primaryText} />
          </ForegroundBanner>
        </ForegroundSelectionBanner>
      </div>
    </div>
  );
};

export default ProjectCard;
