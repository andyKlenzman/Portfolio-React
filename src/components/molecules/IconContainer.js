import React from "react";
import Icon from "../atoms/Icon";
import IconFiles from "../../assets/files/IconFiles";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: none;


`;


const IconContainer = ({selectedIcons}) => {
  return (
    <Wrapper >
      {selectedIcons.map((icon, idx) => {
        return <Icon icon={icon.img} text={icon.text} key={idx} />;
      })}
    </Wrapper>
  );
};

export default IconContainer;
