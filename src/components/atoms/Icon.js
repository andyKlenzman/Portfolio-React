import React from "react";
import styled from "styled-components";

const Text = styled.p`
  font-size: var(--extraSmall);
  bottom: 0;
  text-transform: capitalize;
`;

const ImgIntro = styled.img`
  margin: 8px;
  height: 50px;
`;

const ImgProject = styled.img`
  margin: 15px;
  height: 50px;
`;

const Icon = ({ icon, text, intro }) => {
  if (intro) {
    return (
      <div className="">
        <ImgIntro src={icon} alt="icon"></ImgIntro>
        <Text>{text}</Text>
      </div>
    );
  } else {
    return (
      <div className="">
        <ImgProject src={icon} alt="icon"></ImgProject>
        <Text>{text}</Text>
      </div>
    );
  }
};

export default Icon;
