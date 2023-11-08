import React from "react";
import Icon from "../atoms/Icon";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
`;

const IconContainer = ({ selectedIcons, intro }) => {
  return (
    <Wrapper>
      {selectedIcons.map((icon, idx) => {
        return <Icon icon={icon.img} text={icon.text} intro={intro} key={idx} />;
      })}
    </Wrapper>
  );
};

export default IconContainer;
